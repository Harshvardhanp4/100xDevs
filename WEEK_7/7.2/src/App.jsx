
//----------Context Api----------------------//

// import { useContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { CountContext } from '../../7.1/src/components/context'

// function App() {
//   const [count, setCount] = useState(0)


//   return (
//     <div>
//       <CountContext.Provider value={count}>
//         <Count setCount ={setCount}/>
//         </CountContext.Provider>
//     </div>
//   )
// }

// function Count ({setCount}){
//   console.log("re-render")
//   return <div>
    
//     <CountRenderer/>
//     <Buttons setCount = {setCount}/>
//   </div>
// }

// function CountRenderer(){
//   const count = useContext(CountContext);
//   return <div>
//     {count}
//   </div>
// }

// function Buttons({setCount}){
//   const count  = useContext(CountContext);
//   return <div>
//     <button onClick={()=>{
//       setCount(count+1)
//     }}>Increment</button>
//     <button onClick={()=>{
//       setCount(count - 1 )
//     }}> Decrement</button>
//   </div>
// }
// export default App

//in context api so lets say we passed the state values (count) by context api from app -> countrender and button and not 
// to the count function but we expect only countrender and button to render when they use state but the count also re - renders 
// which is not optimised cause its not using the state 


//so we use recoil:- 


// ------------------ Recoil, useRecoilValue, useSetRecoilState --------------------//


// import { useContext } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { CountContext } from '../../7.1/src/components/context'
// import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
// import { countAtom } from './store/atoms/count'

// function App() {
  
//   return (
//     <div>
//       <RecoilRoot>
//         <Count/>
//         </RecoilRoot>
//     </div>
//   )
// }

// function Count (){
//   console.log("re-render")
//   return <div>
    
//     <CountRenderer/>
//     <Buttons/>
  
//   </div>
// }

// function CountRenderer(){
//   const count = useRecoilValue(countAtom);
//   return <div>
//     {count}
//   </div>
// }

// function Buttons(){
//   console.log(" button render")
//   const setCount = useSetRecoilState(countAtom); //this gives us a setter function to update 
//   // useSetRecoil state  gives us setCount which updates the default atom value more less 
//     return <div>
//     <button onClick={()=>{
//       setCount(count => count+1) // you will have to create a new value as count is not passed  
//     }}>Increment</button>
//     <button onClick={()=>{
//       setCount(count=> count - 1 )
//     }}> Decrement</button>
//   </div>
// }
// export default App




//---------------------------- Even/ODD -------------------------------------------------//


import { useContext, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from '../../7.1/src/components/context'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'

function App() {
  
  return (
    <>
    <RecoilRoot>
      <Count></Count>
    <Buttons></Buttons>
    <Even></Even>
    </RecoilRoot>
    </>
  )
}


function Count(){
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>  
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
      setCount(count=> count + 1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decrease</button>
  </div>
}

function Even(){
 
 const EvenNumber = useRecoilValue(countAtom);
const isEven =  useMemo(()=>{
  return EvenNumber%2== 0
},[EvenNumber])

return isEven ? <div><p>The no is even</p></div> : null;
}
 

export default App