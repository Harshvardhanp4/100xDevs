// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useEffect } from 'react';
// import axios from "axios";

// function App() {
//   const [todos , setTodos] = useState([]);

//   useEffect(()=>{
//     axios.get("http://localhost:3000/todos")
//     .then(function(response){
//       setTodos(response.data)
//     })
//   },[]);

//   return (
//     <div>
//       {todos.map(todo=><Todo title = {todo.title} description = {todo.description}/>)}
//     </div>
//   )
// }

// function Todo({title, description})
// {
//   return <div>
//     <h1>{title}</h1>
//     <h2>{description}</h2>
//   </div>
// }
// export default App





// takes todo id as input and fetches the data for that todo from
// the endpoint and then renders it .




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useEffect } from 'react';
// import axios from "axios";


// function App() {
//   const [selectId, setselectId] = useState(1);
//   return (
//     <div>
//       <button onClick={()=> setselectId(1)}>1</button>
//       <button onClick={()=> setselectId(2)}>2</button>
//       <button onClick={()=> setselectId(3)}>3</button>
//       <button onClick={()=> setselectId(4)}>4</button>
//     <Todo id = {selectId} />
//     </div>
//   )
// }

// function Todo({id}){
//   const [todo, setTodo] = useState({});

//   useEffect(()=>{
//     axios.get (`http://localhost:3000/todos/${id}`)
//     .then(response=>{
//       setTodo(response.data)
//     })
  
//   }, [id])


//   return <div>
//     <h1>
//       {todo.title}
//     </h1>
//     <h2>
//       {todo.description}
//     </h2>
//   </div>
// }


// export default App



//USE MEMO 



import { useState } from 'react'
import './App.css'


function App(){

const [counter , setCounter] = useState(0);
const [inputValue ,setInputValue] = useState(1);
  let count = 0;
  for(let i =0; i<=inputValue; i++){
    count =  count + i;
  }

  return <div>
    <input onChange = {function(e){
      setInputValue(e.target.value);
    }} 
    placeholder="Sum from 1 to n" />
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={()=>{
      setCounter(counter+1);
    }}>Count ({counter})</button>
  </div>

}

export default App