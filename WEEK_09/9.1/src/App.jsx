// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import React from 'react'

// import { useEffect, useState } from "react";

// function App() {

//   // const [render, setRender] = useState(true);

//   // useEffect(()=>{
//   //     setTimeout(()=>{
//   //       setRender(false);
//   //     },5000)
//   // },[])

//   return (
//     <>
//       {/* {render ? <MyComponent></MyComponent> :<div></div> } */}
//       <MyComponent></MyComponent>
//     </>
//   )
// }

// // function MyComponent(){
// //   const [count , setCount] = useState(0);



// // const incrementCount=()=>{
// //   setCount(count + 1);
// // };

// // return (
// //   <div>
// //     <p>{count}</p>
// //     <button onClick={incrementCount}>Increment</button>
// //   </div>
// // )
// // }

// //-------------------------------------------------------------------------------------------------------------------------------------//


// //CLASS BASED COMPONENT


// // class MyComponent extends React.Component {
// //   constructor(props){
// //     super(props);
// //     this.state = {count: 0}
// //   }

// //     incrementCount = ()=>{
// //       this.setState({count: this.state.count + 1});
// //     }

// // render() {
// //   return (
// //     <div>
// //     <p>{this.state.count}</p>
// //     <button onClick={this.incrementCount}>Increment</button>
// //     </div>
// //   )
// // }

// // }


// //------------------------------Functional Components for lifecycle events--------------------------------------//


// // function MyComponent(){
// //     useEffect(()=>{
// //       console.log("component mounted")
// //       return ()=>{
// //       console.log("component unmounted")
// //       };
// //     }, []);

// //     return <div>
// //       From inside MyComponent
// //     </div>
// // }

// //------------------------Classbased Lifecycle------------------------------//

// // class MyComponent extends React.Component{
// //   componentDidMount ( ){
// //     console.log("Component Mounted")
// //   }

// //   componentWillUnmount(){
// //     console.log("Component Unmounted")
// //   }

// //   render(){
// //     return <div>
// //       hi there
// //     </div>
// //   }

// // }



// export default App




//-----------------------------------Custom Hooks------------------------------------------------------//
// import { useEffect, useState } from "react"
// import axios from "axios";


// function App() {

//   const {todos, loading} = useTodos([]);
//   if(loading){  
//     return <div>loading...</div>
//   }

//   return (
//     <>
//       {todos.map(todo => <Track key={todo.id} todo={todo} />)}
//     </>
//   )
// }


// const Track = ({ todo }) => {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// //data fetching hook a custom hook

// function useTodos() {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(()=>{
//        axios.get("http://localhost:5000/todos")
//       .then(res => {
//         setTodos(res.data);
//         setLoading(false); 
//       })
//   }, 5000)
//     },[])
   

//   return {todos, loading};

// }

// export default App 



//------------------------------Auto Refresh Custom Hook ---------------------------------------//


// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const { todos, loading } = useTodos(2); // pass interval in seconds (e.g. 2)

//   if (loading) {
//     return <div>loading...</div>;
//   }

//   return (
//     <>
//       {todos.map((todo) => (
//         <Track key={todo.id} todo={todo} />
//       ))}
//     </>
//   );
// }

// const Track = ({ todo }) => {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   );
// };

// // custom data fetching hook
// function useTodos(n) {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTodos = () => {
//       axios.get("http://localhost:5000/todos")
//         .then((res) => {
//           setTodos(res.data);
//           setLoading(false);
//         })
//         .catch(() => {
//           setLoading(false);
//         });
//     };

//     fetchTodos(); // fetch immediately once
//     const intervalId = setInterval(fetchTodos, n * 5000);

//     return () => clearInterval(intervalId); // cleanup
//   }, [n]);

//   return { todos, loading };
// }

// export default App;



//----------------------------useIsOnline Hook-------------------------------------//
// hook which returns true or false based on whether user is online or offline
// import { useState, useEffect } from "react";

// function App(){
//   const isOnline = useIsOnline();
//   if (isOnline){
//     return "you are online"
//   }

//   return "you are offline"
  
// }

// function useIsOnline(){
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(()=>{
//     window.addEventListener("online",()=>{
//       setIsOnline(true);
//     })
//     window.addEventListener("offline",()=>{
//       setIsOnline(false);
//     })
//   },[])

//   return isOnline
// }

// export default App









//----------------------------------useMousePointer----------------------------------------//
//tells the axis at where mouse pointer is 



// import { useState, useEffect } from "react";

// const useMousePointer=()=>{
//   const [position, setPosition] = useState({x:0,y:0});

//   const handleMouseMove = (e)=>{
//     setPosition({x: e.clientX, y: e.clientY});
//   }

//   useEffect(()=>{
//     window.addEventListener('mousemove', handleMouseMove);
//     return ()=>{
//       window.removeEventListener('mousemove', handleMouseMove);
//     }
//   },[]);
//   return position
// }

// function App(){
  
//   const mousePointer = useMousePointer();
//   return(
//     <>
//     Your mouse pointer is {mousePointer.x} {mousePointer.y}
//     </>
//   )
// }


// export default App


//-------------------------------------useInterval Hook----------------------------------------//
// A hook that return a certain callback function in every n seconds

// import { useEffect, useState } from "react";

// function App(){
//   const [count , setCount] = useState(0);
  
//   useInterval(()=>{
//     setCount(c=>c+1);
//   },1000)

//   return (
//     <>
//     Timer is at {count}
//     </>
//   )
// }

// const useInterval = (callback) =>{
//   useEffect(()=>{
//   const interval = setInterval(callback, 1000);
//   return ()=> clearInterval(interval);  
//   },[callback])
// }

// export default App





//---------------------------------useDebounce--------------------------------------------------//
//used in amazon searchbar thingy ..

// import { useEffect, useState } from "react";

// function useDebounce(value, timeout){
//   const [debouncedValue, setDebouncedValue] =useState(value);
  
//   useEffect(()=>{
//     let timeoutNumber = setTimeout(()=>{
//       setDebouncedValue(value);
//     }, timeout)
//      return ()=>{
//     clearTimeout(timeoutNumber);
//   }
//   },[value])

 
//   return debouncedValue;
// }

// function App(){
//   const [value, setValue] = useState();
//   const debouncedValue = useDebounce(value, 500);

//   return (
//     <>
//     Debounce value is {debouncedValue}<br></br>
//     <input type="text" onChange={e=>setValue(e.target.value) }/>
//     </>
//   )
// }


// export default App