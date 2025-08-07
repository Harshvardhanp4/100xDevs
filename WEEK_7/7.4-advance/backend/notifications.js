const express = require("express")
const cors = require("cors");
const { json } = require("body-parser");
const PORT = 3000;

const app = express();
 app.use(cors());
 app.use(express.json());


 const counts = {
    network: 5,
    jobs: 2,
    messaging: 7,
    notifications: 3
 };

 app.get("/notifications", (req,res)=>{
    res.json(counts);
 })

 app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
 })