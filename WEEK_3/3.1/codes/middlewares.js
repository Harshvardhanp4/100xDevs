const express = require("express");
const app = express(); 
const port = 3000;

function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username!="harsh"&&password!="pass"){
        res.status(403).json({
            msg: "Incorrect Username or Password!"
        });
    }
    next();
}

function kidneyMiddleware(req,res,next){
    const kidneyId=req.query.kidneyId;

    if(kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            msg: "Wrong inputs"
        });
    }
    next();
}

app.get("/health-check",userMiddleware,kidneyMiddleware,(req,res)=>{
    res.send("Youre Welcome!");
});

app.get("/kidney-check",userMiddleware,kidneyMiddleware,(req,res)=>{
    res.send("Youre Welcome kidneyman!");
})

app.get("/heart-check",userMiddleware,kidneyMiddleware,(req,res)=>{
    res.send("Youre Alive!");
});

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})