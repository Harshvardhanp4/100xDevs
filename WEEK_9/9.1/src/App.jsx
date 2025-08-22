import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {

  // const [render, setRender] = useState(true);

  // useEffect(()=>{
  //     setTimeout(()=>{
  //       setRender(false);
  //     },5000)
  // },[])

  return (
    <>
      {/* {render ? <MyComponent></MyComponent> :<div></div> } */}
      <MyComponent></MyComponent>
    </>
  )
}

// function MyComponent(){
//   const [count , setCount] = useState(0);



// const incrementCount=()=>{
//   setCount(count + 1);
// };

// return (
//   <div>
//     <p>{count}</p>
//     <button onClick={incrementCount}>Increment</button>
//   </div>
// )
// }

//-------------------------------------------------------------------------------------------------------------------------------------//


//CLASS BASED COMPONENT


// class MyComponent extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {count: 0}
//   }

//     incrementCount = ()=>{
//       this.setState({count: this.state.count + 1});
//     }
    
// render() {
//   return (
//     <div>
//     <p>{this.state.count}</p>
//     <button onClick={this.incrementCount}>Increment</button>
//     </div>
//   )
// }

// }


//------------------------------Functional Components for lifecycle events--------------------------------------//


function MyComponent(){
    useEffect(()=>{
      console.log("component mounted")
      return ()=>{
      console.log("component unmounted")
      };
    }, []);

    return <div>
      From inside MyComponent
    </div>
}



export default App
