import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import CartDeatilList from '../../components/Header/HeaderCart/components/CartDetail/CartDetailList';
import { addQuantity, decreaseQuantity, deleteItemInCart } from '../../redux/apiCall';
import { accessToken } from '../../utils/getToken';



CartDetailContainer.propTypes = {};

function CartDetailContainer(props) {
    const carts = useSelector(state => state.carts.carts.dishCarts)

    const dispatch = useDispatch()
    const style = {
        fontSize: 17
    }

    const handleDeleteItemInCart = (id) => {
        deleteItemInCart(dispatch, id, accessToken)
    }

    const handleDecreaseInCart = (item) => {
        decreaseQuantity(dispatch, item, accessToken)

    }
    const handleAddInCart = (item) => {
        addQuantity(dispatch, item, accessToken)
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