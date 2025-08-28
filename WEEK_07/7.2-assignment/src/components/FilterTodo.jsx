import { useRecoilState } from "recoil";
import { filterAtom } from "../store/atom";

export function FilterTodo(){
  const [filter,  setFilter] = useRecoilState(filterAtom); 
  return <div>
    <input placeholder= "Filter Todos"type="text" value ={filter} onChange={(e)=>{
      setFilter(e.target.value)
    }}/>
  </div>
}
