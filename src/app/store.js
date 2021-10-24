import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/productSlice'
import cartReducer from '../redux/cartSlice'
import userReducer from '../redux/userSlice'
const rootRecuder = {

    products: productReducer,
    carts: cartReducer,
    user: userReducer,
}
const store = configureStore({
    reducer: rootRecuder,
})
export default store