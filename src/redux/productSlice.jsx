import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        // GET ALL 
        getProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false
            state.products = action.payload
            //console.log('ac', action.payload)
        },
        getProductFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

    }
})

const { reducer, actions } = products
export const { getProductStart, getProductSuccess, getProductFailure } = actions
export default reducer