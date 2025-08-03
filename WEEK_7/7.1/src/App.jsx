
// This is not an optimal approach window.location this will refetch the index.html

// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import './App.css'
// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing'

// function App() {
 

//   return (
//     <div>
//       <div>
//         <button onClick={()=>{window.location.href="/"}}>Landing Page</button>
//         <button onClick={()=>{window.location.href="/dashboard"}}>Dashboard</button>
//       </div>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/dashboard" element ={<Dashboard/>}/>
//       <Route path="/" element ={<Landing/>}/>
//     </Routes>
//     </BrowserRouter>
//     </div>
//   )
// }



// export default App


//----------------------------------------------------------------------------------------------------//

//----So to solve this we use useNavigate hook. Lets you navigate from one route to another
//its taken from react-router-dom library. Chages the oage instead of a hard reload this 
//is the optimal way to do client side routing




// import { lazy } from 'react'
// import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
// import './App.css'

// const Dashboard = lazy(()=> import('./components/Dashboard'))
// const Landing = lazy(()=> import('./components/Landing'))


// function App() {
 
//   return (
//     <div>
//     <BrowserRouter>
//     <Routing></Routing>
//     <Routes>
//       <Route path="/dashboard" element ={<Dashboard/>}/>
//       <Route path="/" element ={<Landing/>}/>
//     </Routes>
//     </BrowserRouter>
  
//     </div>
//   )
// }

// function Routing(){
//     const navigate = useNavigate();// can only be used inside browserrouter
//   return <div>
//       <div>
//         <button onClick={()=>{navigate("/");}}>Landing Page</button>
//         <button onClick={()=>{navigate("/dashboard");}}>Dashboard</button>
//       </div>
//   </div>
// }

// export default App




//------------------------------Suspense API-----------------------------------------------------//


// import { lazy, Suspense } from 'react'
// import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
// import './App.css'

// const Dashboard = lazy(()=> import('./components/Dashboard'))
// const Landing = lazy(()=> import('./components/Landing'))


// function App() {
 
//   return (
//     <div>
//     <BrowserRouter>
//     <Routing></Routing>
//     <Routes>
//       <Route path="/dashboard" element ={<Suspense fallback ={"loading.."}><Dashboard/></Suspense>}/>
//       <Route path="/" element ={<Landing/>}/>
//     </Routes>
//     </BrowserRouter>
  
//     </div>
//   )
// }

// function Routing(){
//     const navigate = useNavigate();// can only be used inside browserrouter
//   return <div>
//       <div>
//         <button onClick={()=>{navigate("/");}}>Landing Page</button>
//         <button onClick={()=>{navigate("/dashboard");}}>Dashboard</button>
//       </div>
//   </div>
// }

// export default App








//--------------------------Prop Drilling----------------------------------------------------------//





// import { useState } from 'react'
// import './App.css'



// function App() {
 
//     const[count, setCount] =  useState(0);

//   return (
//     <div>
//     <Count count = {count}  setCount={setCount}/>
    
//     </div>
//   )
// }

// function Count({count, setCount}){ // here you can see that count doesnt need the setCount but buttons need it so we have drilled the prop down not a good approach but for learning App(parent)-> Child(Count)-> Button->(Child of Count)
//   return <div>
//     {count}
//     <Buttons count = {count} setCount={setCount}/>
//   </div>
// }

// function Buttons({count, setCount}){
//   return <div>
//     <button onClick={()=>{
//       setCount(count + 1);
//     }}>Increase</button>

//     <button onClick={()=>{
//       setCount(count - 1);
//     }}>Decrease</button>

//   </div>
// }

// export default App






//---------------------------------Context API-------------------------------------------------------//
// go to components for context.jsx

import { useState } from 'react'
import './App.css'
import { CountContext } from './components/context';
import { useContext } from 'react';



function App() {
 
    const[count, setCount] =  useState(0);


  return (
    <div>
    <CountContext.Provider value ={count}>
    <Count setCount={setCount}/>
    </CountContext.Provider>
    </div>
  )
}

function Count({ setCount}){ // here you can see that count doesnt need the setCount but buttons need it so we have drilled the prop down not a good approach but for learning App(parent)-> Child(Count)-> Button->(Child of Count)
  return <div>
    <CountRenderer/>
    <Buttons setCount={setCount}/>
  </div>
}

function CountRenderer(){
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count = useContext(CountContext);
  return <div>
    <button onClick={()=>{
      setCount(count + 1);
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count - 1);
    }}>Decrease</button>

  </div>
}

export default App