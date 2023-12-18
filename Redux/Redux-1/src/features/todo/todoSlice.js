import { createSlice, nanoid } from "@reduxjs/toolkit";



const initialState= {
    todos:[{id:1 , text:"hello World"}]
}

export const todoSlice= createSlice({

    name:'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo={
                id: nanoid(), 
                text: action.payload
            }
            console.log(action.payload)
            state.todos.push(todo)
        },
        removetodo:(state, action)=>{
            console.log("|9993|", action.payload)
            state.todos= state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})


export const {addTodo , removetodo} = todoSlice.actions

export default todoSlice.reducer