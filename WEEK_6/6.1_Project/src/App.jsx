// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {


 

//   return (
//     <div>
//       <HeaderWithButton/>
//       <Header title = "Harsh2"></Header>
//     </div> //empty parent and other are children //dpesnt introduce an extra dom element <></>
//   )
// }

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }//destructured props

// function HeaderWithButton(){
//     const [title, setTitle] = useState("Harsh");
     
//   function updateTitle(){
//   setTitle("my name is "+ Math.random());
// }
//   return <div>
//     <button onClick={updateTitle}>Click me to change the title</button>
//       <Header title = {title}></Header>
//   </div>
// }

// export default App


/// USING MEMO
import React, {memo} from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [title, setTitle] = useState("Harsh");
  
       
function updateTitle(){
  setTitle("my name is "+ Math.random());
}

  return (
    <div>
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title = {title}></Header>
      <Header title = "Harsh2"></Header>
    </div> //empty parent and other are children //dpesnt introduce an extra dom element <></>
  )
}

//destructured props

const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})
// parent re renders not the individual renders.
export default App

