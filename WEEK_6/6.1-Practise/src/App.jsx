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


// Wrapper Components example 


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// function App() {
//   return <div>
//      <CardWrapper innerComponent = {<TextComponent/>}/>
//       <CardWrapper innerComponent = {<TextComponent2/>}/>
//   </div>
 
// }

// function TextComponent(){
//    return <div>
//     hi there
//    </div>
// }

// function TextComponent2(){
//    return <div>
//     hi there
//    </div>
// }

// function CardWrapper({innerComponent}){
//     return <div style ={{border: "2px solid black", padding: "20px"}}>
//     {innerComponent}
//     </div>
// }


// export default App



// real wrapper 


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return <div>
     <CardWrapper>
      hi there 
      </CardWrapper>

      <CardWrapper>
        <CardWrapper>
            <TextComponent/>
          </CardWrapper>
        
      </CardWrapper>
      
  </div>
 
}
function CardWrapper({children}){
    return <div style ={{border: "2px solid black", padding: "20px"}}>
    {children}
    </div>
}

function TextComponent(){
  return <div>
    hi from text component
  </div>
}

export default App