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
import { accessToken, idUser } from '../utils/getToken'





//LOGIN

export const userLogin = async (dispatch, username, password) => {

}

//CART

export const decreaseQuantity = async (dispatch, item, accessToken) => {
    dispatch(decreaseQuantityStart)
    try {
        const res = await RequestApi(`api/dishcarts/${item.dishId}`, 'PUT', {
            cartId: item.cartId,
            dishId: item.dishId,
            productId: item.productId,
            quantily: item.quantily - 1,
            sizeName: item.sizeName,
            ice: item.ice,
            sugar: item.sugar,
            toppingId: item.toppingId,
        }, accessToken)
        dispatch(decreaseQuantitySuccess(item))
    }
    catch (err) {
        dispatch(decreaseQuantityFailure(err))
    }
}

export const addQuantity = async (dispatch, item) => {
    dispatch(addQuantityStart)
    try {
        const res = await RequestApi(`api/dishcarts/${item.dishId}`, 'PUT', {
            cartId: item.cartId,
            dishId: item.dishId,
            productId: item.productId,
            quantily: item.quantily + 1,
            sizeName: item.sizeName,
            ice: item.ice,
            sugar: item.sugar,
            toppingId: item.toppingId,
        }, accessToken)
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

export const addOneItemToCart = async (dispatch, valuesAdd) => {

    dispatch(addOneItemToCartStart)
    try {
        const res = await RequestApi('api/dishcarts', 'POST',
            {
                cartId: valuesAdd.cartId,
                productId: valuesAdd.productId,
                quantily: valuesAdd.quantily,
                sizeName: valuesAdd.sizeName,
                ice: valuesAdd.ice,
                sugar: valuesAdd.sugar,
                toppingId: valuesAdd.toppingId
            }, valuesAdd.accessToken)
        await getCarts(dispatch, accessToken, idUser)
    }


    catch (err) {
        dispatch(addOneItemToCartFailure(err))
    }

}

export const getCarts = async (dispatch, accessToken, idUser) => {
    if (accessToken) {
        dispatch(getCartStart)
        try {
            const res = await RequestApi(`api/carts/${idUser}`, 'GET', null, accessToken)
            dispatch(getCartSuccess(res.data))
        }
        catch (err) {
            dispatch(getCartFailure(err))
        }
    }
}

export const deleteItemInCart = async (dispatch, id, accessToken) => {
    dispatch(deleteCartStart)
    try {
        const res = await RequestApi(`api/dishcarts/${id}`, 'DELETE', null, accessToken)
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
        const res = await RequestApi('api/products', 'GET', null)
        dispatch(getProductSuccess(res.data))
    }
    catch (err) {
        dispatch(getProductFailure(err))
    }
}