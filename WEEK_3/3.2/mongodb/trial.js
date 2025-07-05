const mongoose = require("mongoose");




const User = mongoose.model('Users', { name: String, email: String, password: String });

const user = new User({
    name: 'Harsh', 
    email:"harsh@gmail.com",
    password:"123456"

    });
    
    user.save();
