import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { fetchGetCharacters } from './charactersService'

const initialState = {
    isLoading : true,
    isError : false,
    message : 'no error',
    data : []
}

export const getCharacters = createAsyncThunk("characters/fetchCharacters", async({limit,off}) => {
    try {
        const request = await fetchGetCharacters(limit,off);
        const response = await request.json()
        return  response
    } catch (error) {
        return false
    }
})


const charactersSlice = createSlice({
    name : 'characters',
    initialState,
    extraReducers : {
        [getCharacters.pending] : (state,Action) => {
            state.isLoading = true;
        },
        [getCharacters.fulfilled] : (state,Action) => {
            state.isLoading = false;
            if (Action.payload === false) {
                state.isError = true
                state.message = "error"
                state.data = ['']
            } else {
                state.isError = false
                state.message = 'Success'
                state.data = Action.payload
            }
        },
        [getCharacters.rejected] : (state,Action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = 'Rejected' 
        }
    }
})


export const charactersSelectors = (state) => state.characters
export default charactersSlice.reducer



