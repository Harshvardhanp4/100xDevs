
//------------Reconcillation,state,useState-----------------//


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)//this is a state  //count is a state variable //setCount is a function 
//   console.log("hi from App")
//   return (
//     <div>
//       <button onClick={()=>{
//         setCount(count+1) //state update
//       }}>Count is {count}</button>
//     </div>
//   )
// }

// export default App




//---------------------useEffect---------------------//

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  
  const [exchangeData,  setExchangeData] = useState({});
  const [bankData,  setBankData] = useState({});

  console.log("re - render")
 // this code base will cause multiple re renders   
  // setTimeout(()=>{
  //   setBankData({
  //     income: 100
  //   });
  // }, 3000);

  // setTimeout(()=>{
  //   setExchangeData({
  //     returns: 100
  //   });
  // }, 1000); //this code base will cause multiple re renders


  // we use useEffect here

  useEffect(()=>{ 
  setTimeout(()=>{
    setBankData({
      income: 100
    });
  }, 3000);
  },[])

  useEffect(()=>{
    setTimeout(()=>{
    setExchangeData({
      returns: 100
    });
  }, 1000);
  },[])
  
  const incomeTax = (bankData.income  + exchangeData.returns) * 0.3;
  return(
  <div>
    hi there your income tax returns are {incomeTax}
  </div>
  )
  
}

export default App