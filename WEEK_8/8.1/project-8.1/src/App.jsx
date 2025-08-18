import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import {Payout} from './components/Payout'
import { AmountProcess } from './components/AmountProcess'
function App() {
  

  return (
   
    <div className='grid grid-cols-4 gap-4'> 
      {/* <Payout title= {"Next Payout"} amount={"45,000"} orderCount={8}></Payout> */}
    
      <RevenueCard title={"Amount Pending"}amount={"92,700.20"} orderCount={13}></RevenueCard>
    
      {/* <AmountProcess title={"Amount Processed"} amount={"23,000"}></AmountProcess> */}
    </div>
      
  )
}

export default App
