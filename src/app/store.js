import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/productSlice'
import cartReducer from '../redux/cartSlice'
import userReducer from '../redux/userSlice'
import searchReducer from '../redux/searchSlice'

const rootRecuder = {
    products: productReducer,
    carts: cartReducer,
    user: userReducer,
    search: searchReducer,
}
const store = configureStore({
    reducer: rootRecuder,
})
export default store