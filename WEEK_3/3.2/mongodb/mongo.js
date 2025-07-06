const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
require ('dotenv').config({ path: path.resolve(__dirname,'../../.env')});

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Connected to MongoDB"))
.catch((err => console.log("Some error occured", err)))

const User = mongoose.model('Users', {
     name: String,
     email: String,
      password: String 
    });



app.post("/signup", async function (req,res){

    const username  = req.body.username
    const password  = req.body.password
    const name = req.body.name;
   
    const existingUser = await User.findOne({email: username});
    if(existingUser){
        return res.status(400).send("Username alrady exists!")
    }
    const user = new User({
    name: name, 
    email: username,
    password: password

    });
    
    await user.save();   

    res.status(200).json({
       msg: "User added successfully!" 
    })
})

app.listen(3000,()=>{
    console.log("Server is running!")
})

