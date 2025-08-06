// useRecoilValue , useRecoilState, useSetRecoilState//
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
// import { jobAtom, messagingAtom, networkAtom, notificationsAtom } from './store/atoms'

// function App(){
//   return <RecoilRoot>
//     <Navbar></Navbar>
//   </RecoilRoot>
// } 

// function Navbar() {
//   const networkCount = useRecoilValue(networkAtom); // this will only get the curr value
//   const jobCount = useRecoilValue(jobAtom);
//   const notificationCount = useRecoilValue(notificationsAtom);
//   const messagingCount = useRecoilValue(messagingAtom); // this will give value as well as function to update the value. only if [currvalue, setcurrvalue is there i may have removed it for updations]

//   return (
//     <>
//       <RecoilRoot>
//       <button>Home</button>

//       <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
//       <button>Jobs ({jobCount})</button>
//       <button>Messaging ({messagingCount})</button>
//       <button>Notifications ({notificationCount})</button>
//       <ButtonUpdater></ButtonUpdater>
//     </RecoilRoot>
      
//     </>
    
//   )

// }

// function ButtonUpdater(){
//   const setMessagingAtomCount = useSetRecoilState(messagingAtom); // require only state
   
//       return <button onClick={()=>{
//         setMessagingAtomCount(c=> c + 1)
//       }}>Me</button>
// }

// export default App





// -------------------Selectors-------------------------------------------//

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobAtom, messagingAtom, networkAtom, notificationsAtom } from './store/atoms'

function App(){
  return <RecoilRoot>
    <Navbar></Navbar>
  </RecoilRoot>
} 

function Navbar() {
  const networkCount = useRecoilValue(networkAtom); 
  const jobCount = useRecoilValue(jobAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const messagingCount = useRecoilValue(messagingAtom); 

  return (
    <>
     
      <button>Home</button>

      <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notifications ({notificationCount})</button>
      <button>Me</button>
    
      
    </>
    
  )

}



export default App
