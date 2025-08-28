import { atom , selector} from "recoil";

export const titleAtom = atom({
    key: "titleAtom", 
    default: ""
});

export const todoAtom = atom({
    key: "todoAtom",
    default: []
})

export const filterAtom = atom({
    key: "filterAtom", 
    default: ""
});


export const descriptionAtom = atom({
    key: "descriptionAtom", 
    default: ""
});

export const filteredTodoSelector = selector({
    key: "filteredTodoSelector", 
    get: ({get}) =>{
        const todos = get(todoAtom);
        const filter = get(filterAtom);

       return todos.filter((e)=>{
        return e.title.includes(filter) || e.description.includes(filter)
       })
    }
})