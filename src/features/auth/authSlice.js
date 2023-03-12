import { getfetch, loginFetch, validateFetch } from "./authService";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLogined : false,
    isError : false,
    loading : false,
    message : '',
    data : [

    ]
}
export const loginAuth = createAsyncThunk('login/Auth', async ({email,password})=>{
    const response = await loginFetch({email,password});
    const data = await response.json();
    return data;
})

export const getTodo = createAsyncThunk('todo', async ()=>{
    const response = await getfetch();
    const data = await response.json();
    return data;
})


export const validateLogin = createAsyncThunk('validate/Login', async () => {
    const response = await validateFetch();
    const data = await response.json()
    return data
})




export const loginAuthSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [loginAuth.pending]: (state,action) =>{
            state.loading = true
        },
        [loginAuth.fulfilled] : (state,action) => {
            state.loading = false;
            if (action.payload.isError) {
                state.isError = true;
                state.message = action.payload.message;
            } else {
                state.isError = false;
                state.message = action.payload.message;
                state.isLogined = true
            }
        },
        [getTodo.pending]:() => {

        },
        [getTodo.fulfilled] : (state,action) => {
            if (action.payload.isError) {
                state.data = ["unauhorize"]
            } else {
                state.data = action.payload.todos
            }
        },
        [validateLogin.pending]: (state,action) => {
            state.loading = true
        },
        [validateLogin.fulfilled] : (state,action) => {
            console.log(action.payload);
            state.loading = false
            if (action.payload.isError) {
                state.isLogined = false
            } else {
                state.isLogined = true
            }
        }
    }

})

export const authState = (state) => state.auth;

export default loginAuthSlice.reducer;
