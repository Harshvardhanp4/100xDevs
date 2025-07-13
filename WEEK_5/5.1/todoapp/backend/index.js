const express = require("express")
const app = express()
const { createTodo, updateTodo } = require("./types"); 
const { todo } = require("./db");
const PORT = 3000;

app.use(express.json());

    app.post("/todo", async(req,res)=>{
        const createPayload = req.body;
        const parsedPayload = createTodo.safeParse(createPayload);
        if(!parsedPayload.success){
            res.status(411).json({
                msg:"you have sent wrong inputs"
            })
            return;
        }

        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        })
        res.json({
            msg: "Todo has been added!"
        })// await used for if todo is not created then no res.json 
        //if todo is created then and then res.json will work

    })

    app.get("/todo",async(req,res)=>{
        const todos = await todo.find({})
        //wait for database to get so await //
        res.json({
            todos
        })
    })

    app.put("/completed", async(req,res)=>{
        const updatePayload = req.body;
        const parsedPayload = updateTodo.safeParse(updatePayload);
        if(!parsedPayload.success){
            res.status(411).json({
                msg:"you have sent wrong inputs"
            })
        }

        await todo.updateOne({
            _id: req.body.id
        },{
            completed:true
        })
        res.json({
            msg: "Todo completed!"
        })
    })

    app.listen(3000,()=>{
        console.log(`app running on port ${PORT}`)
    })