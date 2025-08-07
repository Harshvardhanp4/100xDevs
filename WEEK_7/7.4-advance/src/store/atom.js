//------------atomFamily atom-----------------//

// import { atomFamily } from "recoil";
// import { TODOS } from "../todos";


// export const todosAtomFamily = atomFamily({
//     key: 'todosAtomFamily',
//     default: id =>{
//         return TODOS.find(x=> x.id === id)
//     },
// })


//------------------Selector family atom -----------//

import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: selectorFamily({
        key: "todoSelectorFamily",
      
        get: (id)=> async ({get}) => {
            const data = await new Promise((resolve)=>{
                setTimeout(async()=>{
                    const res = await axios.get("http://localhost:3000/todos");
                    const todo = res.data.find((todo)=> todo.id === id);
                    resolve(todo);
                },3000);
            })
            return data;
        },
    })
})