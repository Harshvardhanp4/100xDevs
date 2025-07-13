import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

// useEffect hook
function App() {
  const [todos, settodos] = useState([]);

  return (
    <div>
      <CreateTodo settodos={settodos}/>
      <Todos todos ={todos}/>
    </div>
  )
}

export default App
