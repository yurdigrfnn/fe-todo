import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getTodos} from './todoService'


const initialState = {
    loading : false,
    isError : false,
    todos : [],
    page: 1,
    limit: 7,
    message : '',
    totalPages : 0
}


export const getAllTodo = createAsyncThunk('todo', async ({page,limit})=>{
    const response = await getTodos({page,limit});
    const data = await response.json();
    return data;
})


const getTodoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers:{
        setPage : (state,action) => {
             state.page = action.payload 
        }
    },
    extraReducers:{
        [getAllTodo.pending]:(state,action) => {
            state.loading = true
        },
        [getAllTodo.fulfilled] : (state,action) => {
            state.loading = false
            if (action.payload.isError) {
                state.isError = true
                state.message = action.payload.message

            } else {
                state.isError = false
                state.todos = action.payload.todos
                state.totalPages = action.payload.totalPages

            }
        }
    }
})


export const getAllTodoSelector = (state) => state.getTodo
export default getTodoSlice.reducer
export const { setPage } = getTodoSlice.actions