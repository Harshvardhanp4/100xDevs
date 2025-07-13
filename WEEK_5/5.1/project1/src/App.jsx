import { useState } from "react"; 

function App(){
    const [todos, setTodos] = useState([{
        title: "Go to gym",
        description: "Go to gym from 7-9",
        completed: false

    },{
        title: "Study DSA",
        description: "From 9-11",
        completed: true
    }]);

    return(
        <div>
           {/* <Todo title = "harsh" description="yo"/> */}
           {todos.map(function(todo){
            return <Todo title = {todo.title} description = {todo.description}/>
           })}
        </div>

    )
}

function Todo(props){
    return <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
    </div>
}