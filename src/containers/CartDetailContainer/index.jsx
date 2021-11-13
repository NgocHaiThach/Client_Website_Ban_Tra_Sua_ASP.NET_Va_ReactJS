import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartDeatilList from '../../components/Header/HeaderCart/components/CartDetail/CartDetailList';
import { ToastContainer } from 'react-toastify';
import { addCart, removeCart, descreaseCart } from '../HeaderCartContainer/cartSlice';
import { addQuantity, decreaseQuantity, deleteItemInCart } from '../../redux/apiCall';
import { addQuantitySuccess } from '../../redux/cartSlice';

CartDetailContainer.propTypes = {};

function CartDetailContainer(props) {
    const carts = useSelector(state => state.carts.carts.dishCarts)

    const dispatch = useDispatch()
    const style = {
        fontSize: 17
    }

    const handleDeleteItemInCart = (id) => {
        deleteItemInCart(dispatch, id)
    }

    const handleDecreaseInCart = (item) => {
        decreaseQuantity(dispatch, item)
        console.log('tru')
    }
    const handleAddInCart = (item) => {
        addQuantity(dispatch, item)
        console.log('cong')
    }
    return (
        <>
            {carts && <CartDeatilList
                cartList={carts}
                handleDeleteItemInCart={handleDeleteItemInCart}
                handleDecreaseInCart={handleDecreaseInCart}
                handleAddInCart={handleAddInCart}
            />
            }
            <ToastContainer style={style} />
        </>
    );
}

export default CartDetailContainer;