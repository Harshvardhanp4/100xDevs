const express  = require("express");
const app = express(); 
const cors = require("cors");


 
app.use(cors());


app.get("/calculations", (req, res)=>{
    const principal = parseInt(req.query.principal);
    const rate = parseInt (req.query.rate)
    const time = parseInt (req.query.time);

    const interest = (principal*rate*time)/100;
    const total = (principal + interest);


    res.send({
        total: total, 
        interest : interest,
    })
})

app.listen(3000)