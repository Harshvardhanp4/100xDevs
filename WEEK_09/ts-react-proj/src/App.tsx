
import './App.css'

function App() {


  return (
    <>
      <Todos title="Go to gym" description="Morning workout session" done={false} />
    </>
  )
}


interface TodoProp {
  title: string,
  description: string,
  done: boolean
}

function Todos({title, description, done}:TodoProp){
  return <div>
    <h1>
      {title}
    </h1>
    <h2>
      {description}
    </h2>
    <h3>
      {done}
    </h3>
  </div>
}

export default App
