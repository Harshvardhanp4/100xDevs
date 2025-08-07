const express = require("express")
const cors = require("cors")
const PORT = 3000;

const app = express();
 app.use(cors());
 app.use(express.json());

 const TODOS = {
    id: "3",
    title: "Todo3",
    description: "this is todo 3",
    completed: false
 }

 app.get("/todos", (req,res)=>{
    res.json(TODOS)
 })

 
 app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
 })