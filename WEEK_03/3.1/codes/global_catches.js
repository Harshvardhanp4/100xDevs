const express = require("express")
const app = express();

app.use(express.json()); //if we dont use this then you cant get body

app.post("/health-check", (req,res)=>{
    const kidneys = req.body.kidneys;
    const kidneyslength = kidneys.length;

    res.send("you have " + kidneyslength + " kidneys!");
});

//global catches
app.use(function(err,req,res,next){
    // res.json({
    //     msg: "Sorry something is up with our routes!"
    // })
    res.status(500).send("An internal error has occured!");
})

app.listen(3000);