const express = require("express")
const app = express();
const fs = require("fs");
const port = 3000;

app.use(express.json());//this is used so server can read json in the body.

const FILE_PATH ="todos.json";//this will store the todos

let todos =[];//initalized an empty array
if(fs.existsSync(FILE_PATH)){//cjeck if todos.json exists
    const data = fs.readFileSync(FILE_PATH,"utf-8");//this will read the todo if it exists
    todos =JSON.parse(data);//this will convert json string into plain data
}

function saveTodosToFile(){
    fs.writeFileSync(FILE_PATH,JSON.stringify(todos,null,2));//converts the todos into json format

}

function generateId(){
    return Date.now() + Math.floor(Math.random()*1000); // generates unique id
}

app.get("/todos",(req,res)=>{
    res.status(200).json(todos); // sends todos in json
});

app.get("/todos/:id",(req,res)=>{
    const id = req.params.id; //todos/123 => 123
    const todo = todos.find(function(t){
        return t.id==id;
    })//this will go through and check id of todos and also compare with req id

    if(todo){
        res.status(200).json(todo);
    }
    else{
        res.status(404).send("Todo Not Found!")
    }
})

//here we'll create a todo

app.post("/todos",(req,res)=>{
    const{title, description,completed =false}=req.body; //this will contain data sent by user deafult set to false
    if(title == undefined || description == undefined){
    res.status(400).send("Please provide title and description!");
    return;
}

const newTodo ={
    id: generateId(),
    title,
    description,
    completed
};

todos.push(newTodo);
saveTodosToFile();
res.status(201).json({id: newTodo.id});
});

app.listen(port, () => {
  console.log(`Todo app is running on http://localhost:${port}`);
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todo = todos.find(t => t.id == id);

  if (!todo) {
    return res.status(404).send("Todo not found");
  }

  const { title, description, completed } = req.body;

  if (title !== undefined) todo.title = title;
  if (description !== undefined) todo.description = description;
  if (completed !== undefined) todo.completed = completed;

  saveTodosToFile();
  res.status(200).json({ message: "Todo updated" });
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex(t => t.id == id);

  if (index === -1) {
    return res.status(404).send("Todo not found");
  }

  todos.splice(index, 1);
  saveTodosToFile();
  res.status(200).json({ message: "Todo deleted" });
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});
