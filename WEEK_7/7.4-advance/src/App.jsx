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
import { RecoilRoot, useRecoilValue, useRecoilState, useRecoilValueLoadable } from 'recoil'
import { todosAtomFamily } from './store/atom'

function App() {

  return  <RecoilRoot>
    <Todo id = {1}/>
    <Todo id = {2}/>
    
  </RecoilRoot>
 
  
}

function Todo({id}) {
  const todoLoadable = useRecoilValueLoadable(todosAtomFamily(id));
  if(todoLoadable.state === "loading"){
    return <div>Loading Todo{id}</div>;
  }
  const todo = todoLoadable.contents;
    return (
      <>
      {todo.title}
      {todo.description} <br></br>
      </>
    )
}

export default App