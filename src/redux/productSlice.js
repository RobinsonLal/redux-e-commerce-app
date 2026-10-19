
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'



export const fetchData = createAsyncThunk('products/fetch', async function fetchData() {
        const apiURL = `https://api.escuelajs.co/api/v1/products`
        const response = await fetch(apiURL)
        const data = await response.json()
        return data;
    })

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: [],
        status: 'idle',
        error: null
    },
            extraReducers: (builder) => {
            builder
            .addCase(fetchData.pending, (state, action) => {
                state.status = 'Loading'
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = 'Success'
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'Failed'
                state.error = action.error.message;
            })
        }
})

export default productSlice.reducer;

export const {loadProducts} = productSlice.actions;