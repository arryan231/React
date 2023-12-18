import { createContext , useContext } from "react";

export const ToDoContext = createContext({

    todos:[{
        id:1,
        todo:"need",
        completed: false,
    }],
        addToDo : (todo) => {},
        updateToDo: (id, todo) =>{},
        deleteToDo: (id) => {},
        toggleCompleted: (id) => {}
    
})

export const useToDo=()=>
{
    return useContext(ToDoContext)
}

export const ToDoprovider = ToDoContext.Provider