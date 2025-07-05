const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Harshvardhanp4:igotnochill@cluster0.plpym.mongodb.net/")


const User = mongoose.model('Users', { name: String, email: String, password: String });

const user = new User({
    name: 'Harsh', 
    email:"harsh@gmail.com",
    password:"123456"

    });
    
    user.save();
