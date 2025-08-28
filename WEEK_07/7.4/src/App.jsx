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



// //---------------------------Selectors----------------------------//

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
// import { jobAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './store/atoms'
// import { useMemo } from 'react'

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

//   // const totalNotificationCount = useMemo(()=>{
//   //   return networkCount + jobCount + notificationCount + messagingCount; 
//   // }, [networkCount, jobCount ,  notificationCount, messagingCount]) // this is a ugly approach of loading all the notficiations not ugly but we can use a selector to do this 
  
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);
//   return (
//     <>
      
//       <button>Home</button>
//       <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
//       <button>Jobs ({jobCount})</button>
//       <button>Messaging ({messagingCount})</button>
//       <button>Notifications ({notificationCount})</button>
//       <button>Me({totalNotificationCount})</button>
    
      
//     </>
    
//   )

// }
 

// export default App




//-------------------------Asynchronus Data Queries------------------------------------------//

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './store/atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App(){
  return <RecoilRoot>
   <Navbar/>
  </RecoilRoot>
} 

function Navbar() {
  // const [notificationCount, setNotificationCount] = useRecoilState(notifications); 
  const notificationCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  
  // useEffect(()=>{
  //   axios.get("http://localhost:3000/notifications")
  //   .then(res=> setNotificationCount(res.data))
  //   .catch(err=> console.error("Error fetching counts", err))
  // },[setNotificationCount])                                    // no use of this 
   
  return (
    <>

      
      <button>Home</button>
      <button>My Network ({notificationCount.network >= 100 ? "99+" : notificationCount.network})</button>
      <button>Jobs ({notificationCount.jobs})</button>
      <button>Messaging ({notificationCount.messaging})</button>
      <button>Notifications ({notificationCount.notifications})</button>
      <button>Me({totalNotificationCount})</button>
    
      
    </>
    
  )

}
 

export default App