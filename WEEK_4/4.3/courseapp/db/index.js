const mongoose = require("mongoose");

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)

.then(()=>console.log("Connected to MongoDB"))
.catch((err => console.log("Some error occured", err)))

const AdminSchema = new mongoose.Schema({
    username : String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
})

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}