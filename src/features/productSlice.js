import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';


const initialState = {
    isLoading : true,
    isError : false,
    message : 'no error',
    data : []
}

export const getProducts = createAsyncThunk("product/getProducts",async()=> {
    try {
        const request = await fetch('http://loalhost:5000/products')
        const response = request.json()
        return response
    } catch (error) {
        return false
    }
})



const productSlice = createSlice({
    name : 'product',
    initialState,
    extraReducers:{
        [getProducts.fulfilled]: (state,action) =>{
            if (action.payload === false)  {
                state.isLoading = false
                state.isError = true
                state.message = 'error'
            }else {
                state.isLoading = false 
                state.data = action.payload
            }
        }
    }
})


export const productSelectors = (state) => state.product
export default productSlice.reducer