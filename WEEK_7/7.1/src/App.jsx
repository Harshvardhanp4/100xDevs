
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


//Suspense API


import { lazy, Suspense } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'

const Dashboard = lazy(()=> import('./components/Dashboard'))
const Landing = lazy(()=> import('./components/Landing'))


function App() {
 
  return (
    <div>
    <BrowserRouter>
    <Routing></Routing>
    <Routes>
      <Route path="/dashboard" element ={<Suspense fallback ={"loading.."}><Dashboard/></Suspense>}/>
      <Route path="/" element ={<Landing/>}/>
    </Routes>
    </BrowserRouter>
  
    </div>
  )
}

function Routing(){
    const navigate = useNavigate();// can only be used inside browserrouter
  return <div>
      <div>
        <button onClick={()=>{navigate("/");}}>Landing Page</button>
        <button onClick={()=>{navigate("/dashboard");}}>Dashboard</button>
      </div>
  </div>
}

export default App
