import { useRecoilState } from "recoil";
import { todoAtom,titleAtom, descriptionAtom } from "../store/atom";

export function Button(){
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