// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import { number } from "../../components/Container/Product/components/ProductItemDetail"
// import axios from "axios";
// import RequestApi from '../../utils/RequestApi'

// export const getCarts = createAsyncThunk(
//     "carts/getCarts",
//     async () => {
//         const res = await RequestApi('carts', 'GET', null).then(res => {
//             return res.data
//         })
//         return res
//     }

// )

// const cart = createSlice({
//     name: 'carts',
//     initialState: {
//         loading: false,
//         carts: [],
//         message: "",
//     },
//     reducers: {
//         addCart: (state, action) => {
//             const { product, } = action.payload
//             const indexAdd = state.findIndex(cart => cart.product.id === product.id)
//             if (indexAdd !== -1) {
//                 state[indexAdd].quantity += 1
//             }
//             else {
//                 state.push(action.payload)
//             }
//         },
//         addToCart: (state, action) => {
//             const { product, quantity } = action.payload
//             // console.log('quan', number)

//             const indexAdd = state.findIndex(cart => cart.product.id === product.id)
//             if (indexAdd !== -1) {
//                 state[indexAdd].quantity += number
//             }
//             else {
//                 state.push(action.payload)
//             }
//         },
//         removeCart: (state, action) => {
//             const removeCartId = action.payload.product.id

//             state = state.filter(cart => cart.product.id !== removeCartId)
//             return state

//         },
//         descreaseCart: (state, action) => {
//             const { product, quantity } = action.payload
//             const indexItem = state.findIndex(cart => cart.product.id === product.id)
//             console.log('index', indexItem)
//             if (state[indexItem].quantity > 1) {
//                 state[indexItem].quantity -= 1
//             }
//         }
//     },
//     extraReducers: {
//         [getCarts.pending]: (state, action) => {
//             state.loading = true;
//         },
//         [getCarts.fulfilled]: (state, action) => {
//             state.loading = false;
//             state.carts = action.payload
//         },
//         [getCarts.rejected]: (state, action) => {
//             state.loading = false;
//             state.message = action.error;
//         }
//     }
// })



// const { reducer, actions } = cart
// export const { addCart, addToCart, removeCart, descreaseCart } = actions
// export default reducer