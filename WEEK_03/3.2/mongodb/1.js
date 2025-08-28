const express = require ("express")
const jwt = require ("jsonwebtoken")
const mongoose = require("mongoose")
const jwtPassword = "123456";

mongoose.connect(
    "mongo_url",

)

const User = mongoose.model("User",{
    name : String,
    username : String, 
    password : String,
});

const app = express();
app.use(express.json());

function userExists(username, password){
    //check in db
}

app.post("/signin", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg: "User doesn't exist!"
        })
    }
})
