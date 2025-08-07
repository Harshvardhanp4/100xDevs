// -----------------AtomFamily--------------------//

// import './App.css'
// import { RecoilRoot, useRecoilValue } from 'recoil'
// import { todosAtomFamily } from './store/atom'

// function App() {

//   return  <RecoilRoot>
//     <Todo id = {1}/>
//     <Todo id = {2}/>
//     <Todo id = {2}/>
//     <Todo id = {2}/>
//   </RecoilRoot>
 
  
// }

// function Todo({id}) {
//   const currentTodo = useRecoilValue(todosAtomFamily(id));

//     return (
//       <>
//       {currentTodo.title}
//       {currentTodo.description}
//       </>
//     )
// }

// export default App

//------------------SelectorFamily----------------------------//


import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { todosAtomFamily } from './store/atom'

function App() {

  return  <RecoilRoot>
    <Todo id = {1}/>
    <Todo id = {2}/>
    
  </RecoilRoot>
 
  
}

function Todo({id}) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

    return (
      <>
      {todo.title}
      {todo.description}
      </>
    )
}

export default App