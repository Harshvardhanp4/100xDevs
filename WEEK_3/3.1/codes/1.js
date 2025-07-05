const express = require("express");

const app = express();

const port = 3000;
app.get("/health-check",(req,res)=>{
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username!="harsh" && password !="pass"){
        res.status(403).json({
            msg: "user doesnt exist!",
        });
        return;
    }

    if(kidneyId!=1 && kidneyId!=2){
        res.status(411).json({
            msg: "Wrong Inputs!",
        });
        return;
    }
    res.send("Your heart is healthy");

});

















    app.listen(port, () => {
  console.log(`Todo app is running on http://localhost:${port}`);
});