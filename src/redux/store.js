import { configureStore, createReducer } from "@reduxjs/toolkit";

import productReducer from '../redux/productSlice'
import cartReducer from '../redux/cartSlice'


export default configureStore({
    reducer: {
        productReducer,
        cartReducer
    }
})