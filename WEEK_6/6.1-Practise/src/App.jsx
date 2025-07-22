// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// let counter = 4;
// function App() {
//   const [todos, setTodos] = useState([{
    
//     id: 1,
//     title: "go to gym",
//     description: "at 7 today",

//   },
// {
//   id: 2,
//     title: "go to home",
//     description: "at 9 today",
// },{
//   id: 3,
//     title: "go to walk",
//     description: "at 11 today",
// }])

//   function addTodo(){
//     setTodos([...todos,{
//       id: counter++,
//       title: Math.random(),
//       description: Math.random()
//     }])
//   }

//   return (
//     <div>
//      <button onClick={addTodo}>Add a todo</button>
//     {todos.map (todo => <Todo key ={todo.id} title = {todo.title} description ={todo.description}/>)}
//     </div>
//   )
// }

// function Todo({title,description}){
//   return <div>
//     <h1>{title}

//     </h1>
//     <h4>
//       {description}
//     </h4>
//   </div> 
// }

// export default App






//Wrapper Components 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter = 4;
function App() {
  const [todos, setTodos] = useState([{
    
    id: 1,
    title: "go to gym",
    description: "at 7 today",

  },
{
  id: 2,
    title: "go to home",
    description: "at 9 today",
},{
  id: 3,
    title: "go to walk",
    description: "at 11 today",
}])

  function addTodo(){
    setTodos([...todos,{
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>
     <button onClick={addTodo}>Add a todo</button>
    {todos.map (todo => <Todo key ={todo.id} title = {todo.title} description ={todo.description}/>)}
    </div>
  )
}

function Todo({title,description}){
  return <div>
    <h1>{title}

    </h1>
    <h4>
      {description}
    </h4>
  </div> 
}

export default App
