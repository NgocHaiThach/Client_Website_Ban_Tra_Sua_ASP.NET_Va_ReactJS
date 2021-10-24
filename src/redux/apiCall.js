import RequestApi from '../utils/RequestApi'
import { getProductStart, getProductSuccess, getProductFailure } from "./productSlice"
import {
    getCartStart, getCartSuccess, getCartFailure,
    deleteCartStart, deleteCartSuccess, deleteCartFailure,
    addOneItemToCartStart, addOneItemToCartSuccess, addOneItemToCartFailure,
    updateCartStart, updateCartSuccess, updateCartFailure,
    addQuantityStart, addQuantitySuccess, addQuantityFailure,
    decreaseQuantityStart, decreaseQuantitySuccess, decreaseQuantityFailure
} from "./cartSlice"
import { number } from '../components/Container/Product/components/ProductItemDetail'

//LOGIN

export const userLogin = async (dispatch, username, password) => {

}

//CART

export const decreaseQuantity = async (dispatch, item) => {
    dispatch(decreaseQuantityStart)
    try {

        const req = await RequestApi(`carts/${item.id}`, 'PUT', {
            product: {
                idCategory: item.product.idCategory,
                name: item.product.name,
                image: item.product.image,
                price: item.product.price,
                description: item.product.description,
                inventory: item.product.inventory,
                rating: item.product.rating,
            },
            quantity: item.quantity - 1
        })
        dispatch(decreaseQuantitySuccess(item))
    }
    catch (err) {
        dispatch(decreaseQuantityFailure(err))
    }
}

export const addQuantity = async (dispatch, item) => {
    dispatch(addQuantityStart)
    try {

        const req = await RequestApi(`carts/${item.id}`, 'PUT', {
            product: {
                idCategory: item.product.idCategory,
                name: item.product.name,
                image: item.product.image,
                price: item.product.price,
                description: item.product.description,
                inventory: item.product.inventory,
                rating: item.product.rating,
            },
            quantity: item.quantity + 1
        })
        dispatch(addQuantitySuccess(item))
    }
    catch (err) {
        dispatch(addQuantityFailure(err))
    }
}

export const updateCart = async (dispatch, item) => {
    dispatch(updateCartStart)
    console.log('item put', item.id)
    try {

        const req = await RequestApi(`carts/${item.id}`, 'PUT', {
            product: {
                idCategory: item.product.idCategory,
                name: item.product.name,
                image: item.product.image,
                price: item.product.price,
                description: item.product.description,
                inventory: item.product.inventory,
                rating: item.product.rating,
            },
            quantity: item.quantity + number
        })
        dispatch(updateCartSuccess(item))
    }
    catch (err) {
        dispatch(updateCartFailure(err))
    }
}

export const addOneItemToCart = async (dispatch, item) => {
    //console.log('id first', item.id)
    dispatch(addOneItemToCartStart)
    try {
        const req = await RequestApi('carts', 'POST', { product: item.product, quantity: number })
        dispatch(addOneItemToCartSuccess(item))
    }
    catch (err) {
        dispatch(addOneItemToCartFailure(err))
    }
}

export const getCarts = async (dispatch) => {
    dispatch(getCartStart)
    try {
        const res = await RequestApi('carts', 'GET', null)
        dispatch(getCartSuccess(res.data))
    }
    catch (err) {
        dispatch(getCartFailure(err))
    }
}

export const deleteItemInCart = async (dispatch, id) => {
    dispatch(deleteCartStart)
    try {
        const res = await RequestApi(`carts/${id}`, 'DELETE', null)
        dispatch(deleteCartSuccess(id))
    }
    catch (err) {
        dispatch(deleteCartFailure(err))
    }
}

// PRODUCT
export const getProducts = async (dispatch) => {
    dispatch(getProductStart)
    try {
        const res = await RequestApi('products', 'GET', null)
        dispatch(getProductSuccess(res.data))
    }
    catch (err) {
        dispatch(getProductFailure(err))
    }
}