import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  putTodoNameByid,
  putTodoCompleteByid,
  deleteTodoByid,
  postTodo
} from "./todoService";

const initialState = {
    loading : false,
    isError : false,
    nameTodo : '',
    message : '',
    isOpenCreate : false
}

export const createTodo = createAsyncThunk('create/todo', async ({name}) => {
    const response = await postTodo(name)
    const data = await response.json()
    return data
})

export const todoComplete = createAsyncThunk('complete/todo', async({id,complete}) => {
    const response = await putTodoCompleteByid({id,complete})
    const data = await response.json()
    console.log("param",complete)
})


const actionSlice = createSlice({
    name : "action",
    initialState,
    reducers: {
        setName : (state,action)=>{
            state.nameTodo = action.payload
        },
        resetState : (state,payload) => {
            state.nameTodo = ''
            state.isError = false
        },
        openModalCreate : (state,action) => {
            state.isOpenCreate = true
            console.log('testtsts');
        },
        closeModalCreate : (state,action) => {
            state.isOpenCreate = false
            state.nameTodo = ''
        }
    },
    extraReducers:{
        [createTodo.pending] : (state,action) => {
            state.loading = true
        },
        [createTodo.fulfilled] : (state,action) => {
            state.loading = false
            if (action.payload.isError) {
                state.isError = true
                state.message = action.payload.message
            } else {
                state.isError = false
                state.isOpenCreate = false
                state.nameTodo = ''
            }
        },
        [todoComplete.pending] : (state,action) => {
            state.loading = true
        },
        [todoComplete.fulfilled] : (state,action) => {
            state.loading = false
        }
    }

})

export const {setName,openModalCreate,closeModalCreate,resetState} = actionSlice.actions
export const actionSelector = (state) => state.action
export default actionSlice.reducer

