const mongoose = require("mongoose");
require ('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)

const User = mongoose.model('Users', { name: String, email: String, password: String });

const user = new User({
    name: 'Harsh', 
    email:"harsh@gmail.com",
    password:"123456"

    });
    
    user.save();
