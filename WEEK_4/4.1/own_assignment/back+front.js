const express = require("express")
const app = express();
const cors = require("cors");

app.use(cors()); //allows req from other origins
app.get("/sum", (req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send((a+b)).toString();
});

app.listen(3000)