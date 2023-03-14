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
    isOpenCreate : false,
    // edit todo
    isOpenEdit : false,
    editId : null,
    //delete
    isOpenDelete : false,
    deleteId : null,
}

export const createTodo = createAsyncThunk('create/todo', async ({name}) => {
    const response = await postTodo(name)
    const data = await response.json()
    return data
})

export const todoComplete = createAsyncThunk('complete/todo', async({id,complete}) => {
    const response = await putTodoCompleteByid({id,complete})
    const data = await response.json()
    return data
})

export const todoEdit = createAsyncThunk('complete/todo', async({id,name}) => {
    const response = await putTodoNameByid({id,name})
    const data = await response.json()
    return data
})

export const todoDelete = createAsyncThunk('delete/todo' , async (id) => {
    const response = await deleteTodoByid(id)
    const data = await response.json()
    return data
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
        },
        closeModalCreate : (state,action) => {
            state.isOpenCreate = false
            state.nameTodo = ''
            state.isError = false
        },
        openModalEdit : (state,action) => {
            state.isOpenEdit = true
        },
        closeModalEdit : (state,action) => {
            state.isOpenEdit = false
            state.nameTodo = ''
        },
        setId : (state,action) => {
            state.editId = action.payload
        },
        setIdDelete : (state,action) => {
            state.deleteId = action.payload
        },
        openModalDelete : (state,action) => {
            state.isOpenDelete = true
        },
        closeModalDelete : (state,action) => {
            state.isOpenDelete = false
        },
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
        },
        [todoEdit.pending] : (state,action) => {
            state.loading = true
        },
        [todoEdit.fulfilled] : (state,action) => {
            state.loading = false
            if (action.payload.isError) {
                state.isError = true
                state.message = action.payload.message
            } else {
                state.isError = false
                state.isOpenEdit = false
                state.nameTodo = ''
                state.editId = null
            }
        },
        [todoDelete.pending] : (state,action) => {
            state.loading = true
        },
        [todoDelete.fulfilled] : (state,action) => {
            state.loading = false
            if (action.payload.isError) {
                state.isError = true
                state.message = action.payload.message
            } else {
                state.isError = false
                state.isOpenDelete = false
                state.deleteId = null
            }
        }
    }

})

export const {setName,openModalCreate,closeModalCreate,resetState,openModalEdit,closeModalEdit,setId,openModalDelete,closeModalDelete,setIdDelete} = actionSlice.actions
export const actionSelector = (state) => state.action
export default actionSlice.reducer

