// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getProdcuts = createAsyncThunk(
//     "products/getProducts",
//     async () => {
//         // const res = await axios.get('http://localhost:3000/products')
//         // return res.data

//         const res = await axios({
//             method: 'GET',
//             url: "http://localhost:3000/products",
//             data: null,
//         })
//             .then(res => {
//                 return res.data
//             })
//             .catch(err => {
//                 console.error(err)
//             })
//         return res
//     }
// )

// const products = createSlice({
//     name: 'products',
//     initialState: {
//         loading: false,
//         products: [],
//         message: "",
//     },
//     reducers: {
//         addProduct: (state, action) => {
//             const { product, quantity } = action
//             state.push({ product, quantity })
//         },
//         removeProduct: (state, action) => {
//             const remveProductId = action.payload
//             state = state.filter(product => product.id !== remveProductId)
//             return state
//         },
//     },
//     extraReducers: {
//         [getProdcuts.pending]: (state, action) => {
//             state.loading = true;
//         },
//         [getProdcuts.fulfilled]: (state, action) => {
//             state.loading = false;
//             state.products = action.payload
//         },
//         [getProdcuts.rejected]: (state, action) => {
//             state.loading = false;
//             state.message = action.error;
//         }
//     }
// })

// const { reducer, actions } = products
// export const { addProduct, removeProduct, } = actions
// export default reducer