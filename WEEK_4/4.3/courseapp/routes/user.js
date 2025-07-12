const { Router } = require("express") 
const adminMiddleware = require("../middlewares/user");
const userMiddleware = require("../middlewares/user");
const router = Router();

//User Route
router.post('/signup', (req,res)=>{
  
});

router.get('/courses',userMiddleware,(req,res)=>{

});

router.post('/courses/:courseId', userMiddleware, (req,res)=>{
   
});

router.post('/purchasedCourses', userMiddleware, (req,res)=>{

});

module.exports = router; 