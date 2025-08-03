
//----------Context Api----------------------//

import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from '../../7.1/src/components/context'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount ={setCount}/>
        </CountContext.Provider>
    </div>
  )
}

function Count ({setCount}){
  console.log("re-render")
  return <div>
    
    <CountRenderer/>
    <Buttons setCount = {setCount}/>
  </div>
}

function CountRenderer(){
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count  = useContext(CountContext);
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increment</button>
    <button onClick={()=>{
      setCount(count - 1 )
    }}> Decrement</button>
  </div>
}
export default App

//in context api so lets say we passed the state values (count) by context api from app -> countrender and button and not 
// to the count function but we expect only countrender and button to render when they use state but the count also re - renders 
// which is not optimised cause its not using the state 




// ------------------       --------------------//
