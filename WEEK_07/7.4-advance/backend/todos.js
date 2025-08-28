const express = require("express")
const cors = require("cors")
const PORT = 3000;

const app = express();
 app.use(cors());
 app.use(express.json());

 const TODOS = [
  {
    id: 1,
    title: "Go to Gym",
    description: "From 6-8",
    completed: false
  },
  {
    id: 2,
    title: "Eat Food",
    description: "From 9-10",
    completed: false
  },
  {
    id: 3,
    title: "Todo3",
    description: "some desc",
    completed: false
  }
];


 app.get("/todos", (req,res)=>{
    res.json(TODOS)
 })

 
 app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
 })