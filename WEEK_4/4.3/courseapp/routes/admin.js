const { Router } = require("express") 
const adminMiddleware = require("../middlewares/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

//Admin Route
router.post('/signup', async(req,res)=>{
    //creating post req admin signup logic
    const username = req.body.username
    const password = req.body.password

    //checking if a user with this username exists
     await Admin.create({
        username,
        password
     })

     res.json({
        msg: "Admin created succesfully!"
     })
});

router.post('/courses',adminMiddleware,async(req,res)=>{
    //creating course access to admin
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse);
    res.send({
        msg: "Course created successfully",courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req,res)=>{
    //fetching all courses logic
   const response = await Course.find({});
   
   res.json({
    courses: response
   })
});

module.exports = router; 