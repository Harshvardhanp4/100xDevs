import { useRecoilState } from "recoil";
import { titleAtom, descriptionAtom } from "../store/atom";

export function Todos(){
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
