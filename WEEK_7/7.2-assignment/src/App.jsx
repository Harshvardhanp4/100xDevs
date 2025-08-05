import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import {  descriptionAtom, filterAtom, filteredTodoSelector, titleAtom, todoAtom } from './store/atom'


function App() {
  

  return (
    <RecoilRoot>
    <h1>Welcome to TodoFilter.Com</h1>
    <Todos></Todos><br />
    <Button></Button><br />
    <FilterTodo></FilterTodo>
    <TodoList></TodoList>
    </RecoilRoot>
  )
}

function Todos(){
  const [title, setTitle] = useRecoilState(titleAtom)
  const [description, setDescription] = useRecoilState(descriptionAtom);


    return <div>
      <input placeholder= "Title" type="text" value={title} onChange={(e)=>{
        setTitle(e.target.value);
      }}/><br></br>
      <input placeholder= "Description"type="text" value={description} onChange={(e)=>{
        setDescription(e.target.value);
      }}/>
    </div>
}

function Button(){
  const [todos,  setTodos] = useRecoilState(todoAtom);
  const [title, setTitle] = useRecoilState(titleAtom);
  const [description, setDescription]= useRecoilState(descriptionAtom);


  const addTodo = ()=>{
    if (!title.trim() || !description.trim()) return;

    setTodos(todos.concat({title , description}));

    setTitle("");
    setDescription("");
  }
  return <div>
    <button onClick={addTodo}>Add todo</button>
  </div>
  
}

function FilterTodo(){
  const [filter,  setFilter] = useRecoilState(filterAtom); 
  return <div>
    <input placeholder= "Filter Todos"type="text" value ={filter} onChange={(e)=>{
      setFilter(e.target.value)
    }}/>
  </div>
}


function TodoList() {
  const todos = useRecoilValue(filteredTodoSelector);

  return (
    <ul>
      {todos.map((t, i) => (
        <li key={i}>
          <strong>{t.title}</strong> - {t.description}
        </li>
      ))}
    </ul>
  );
}

export default App
