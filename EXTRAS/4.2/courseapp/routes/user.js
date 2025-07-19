const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const router = Router();
const { User, Course } = require("../db")
const mongoose = require("mongoose")

//user route

router.post('/signup', async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
            username,
            password
        })
    
        res.json({
            msg: "Users created successfully!"
        })
        

});

router.get('/courses',  async(req,res)=>{
    const response = await Course.find({})
    res.json({
        courses: response
    })
})

router.post('/courses/:courseId', userMiddleware, async(req,res)=>{
    const courseId = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne({
        username
    },{
         $push: { purchasedCourses: new mongoose.Types.ObjectId(courseId) } }
)
    res.json({
        msg: "Purchase Complete"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req,res)=>{
    const user = await User.findOne({
        username: req.headers.username

    });
    console.log(user.purchasedCourses)
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});


module.exports = router;