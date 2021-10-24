import { createSlice } from "@reduxjs/toolkit";
import { number } from "../components/Container/Product/components/ProductItemDetail";
import { idLastItem } from "../containers/ProductDetailPage";


const carts = createSlice({
    name: 'products',
    initialState: {
        carts: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        // Decrease quantity
        decreaseQuantityStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        decreaseQuantitySuccess: (state, action) => {
            state.isFetching = false
            const index = state.carts.findIndex(item => item.product.name === action.payload.product.name)
            if (index !== -1) {
                state.carts[index].quantity -= 1
            }
        },
        decreaseQuantityFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

        // Add quantity
        addQuantityStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        addQuantitySuccess: (state, action) => {
            state.isFetching = false
            const index = state.carts.findIndex(item => item.product.name === action.payload.product.name)
            if (index !== -1) {
                state.carts[index].quantity += 1
            }
        },
        addQuantityFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

        // UPDATE
        updateCartStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        updateCartSuccess: (state, action) => {
            state.isFetching = false
            const index = state.carts.findIndex(item => item.product.name === action.payload.product.name)
            if (index !== -1) {
                state.carts[index].quantity += number
            }
        },
        updateCartFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

        // ADD 1 ITEM TO CART
        addOneItemToCartStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        addOneItemToCartSuccess: (state, action) => {
            state.isFetching = false
            let id = 0
            if (idLastItem === undefined) {
                id = 1
            }
            else {
                id = idLastItem.id + 1
            }

            //number là state của số lượng ở trang detail product sẽ add vào
            //isLastItem là id của item cuối cùng của giỏ hàng
            const valueAdd = {
                id: id,
                product: action.payload.product,
                quantity: number
            }
            state.carts.push(valueAdd)

        },
        addOneItemToCartFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

        // DELETE
        deleteCartStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        deleteCartSuccess: (state, action) => {
            state.isFetching = false
            const index = state.carts.findIndex(item => item.id === action.payload)
            state.carts.splice(index, 1)
        },
        deleteCartFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

        // GET ALL 
        getCartStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getCartSuccess: (state, action) => {
            state.isFetching = false
            state.carts = action.payload
        },
        getCartFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

    }
})

const { reducer, actions } = carts
export const { getCartStart, getCartSuccess, getCartFailure,
    deleteCartStart, deleteCartSuccess, deleteCartFailure,
    addOneItemToCartStart, addOneItemToCartSuccess, addOneItemToCartFailure,
    updateCartStart, updateCartSuccess, updateCartFailure,
    addQuantityStart, addQuantitySuccess, addQuantityFailure,
    decreaseQuantityStart, decreaseQuantitySuccess, decreaseQuantityFailure,
} = actions
export default reducer