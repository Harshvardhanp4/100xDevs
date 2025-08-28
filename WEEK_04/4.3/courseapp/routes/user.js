const { Router } = require("express") 
const adminMiddleware = require("../middlewares/user");
const userMiddleware = require("../middlewares/user");
const { User, Course } = require("../db");
const router = Router();

//User Route
router.post('/signup', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password
    })
    res.json({
        msg: "User created successfully!"
    })
});

router.get('/courses',async(req,res)=>{
    const response = await Course.find({})
    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req,res)=>{
   const courseId = req.params.courseId;
   const username = req.headers.username;
   try{
    await User.updateOne({
    username
   },{
    "$push": {
       purchasedCourses : courseId
    }
   })
   }
   catch(e){
    console.log(e)
   };
   res.json({
    msg: "Purchase complete!"

   })
});

router.get('/purchasedCourses', userMiddleware, async(req,res)=>{
   const user = await  User.findOne({
        username : req.headers.username
    });
    console.log(user.purchasedCourses)
    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })
    res.json({
        purchasedCourses: courses
    })
});

module.exports = router; 