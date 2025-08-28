import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import {  descriptionAtom, filterAtom, filteredTodoSelector, titleAtom, todoAtom } from './store/atom'
import { Todos } from './components/Todos'
import { Button } from './components/Button'
import { FilterTodo } from './components/FilterTodo'
import { TodoList } from './components/TodoList'
function App() {
  

  return (
    <RecoilRoot>
    <h1>Welcome to TodoFilter.Com</h1>
    <Todos></Todos>
    <br />
    <Button></Button>
    <br />
    <FilterTodo></FilterTodo>
    <br />
    <TodoList></TodoList>
    </RecoilRoot>
  )
}








export default App
