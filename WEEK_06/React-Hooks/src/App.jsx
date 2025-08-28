// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useEffect } from 'react'

// function App() {
  
//   useEffect(function(){
//     alert("hi")
//   },[]) //[] is an dependancy array that is run it on mount

//   return (
//     <div>
//       hi there
//     </div>
//   )
// }


// export default App


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json);
    }) 
  },[])

    return <div>
      {todos.length}
      {todos.map(todo=><Todo title ={todo.title} description ={todo.description}/>)}
    </div>


}


function Todo({title, description}){
 return (
   <div>
    <h1>
      {title}
    </h1>

    <h4>
      {description}
    </h4>
  </div>
 )
}
export default App