const express = require("express")
const jwt = require ("jsonwebtoken");
const jwtPassword = "123456";
const port = 3000;

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "harsh@gmail.com",
        password:"123",
        name:"harsh patil"
    },

    {
        username: "om@gmail.com",
        password: "12321",
        name: "Om argade",
    },
    {
        username: "anuj@gmail.com",
        password: "12321",
        name: "Anuj Khirsagar"
    },
];

function userExists(username , password){
    let userExists = false;
    for(let i = 0; i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password==password){
            userExists= true;
        }
    }
    return userExists;

}

app.post("/signin", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User doesn't exist! in memory"
        });
    }
        var token = jwt.sign({username : username }, jwtPassword);
        return res.json({
            token,
        })   ; 
});


app.get("/users",(req,res)=>{
    const token = req.headers.authorization;

    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        res.json({
            users: ALL_USERS.filter(function(value){
                if(value.username == username){
                    return false
                }else{
                    return true;
                }
            })
        })

    } catch(err){
        return res.status(403).json({
            msg: "Invalid token!",
        });
    }


});

app.listen(3000,()=>{
    console.log("Server is running on 3000");
})