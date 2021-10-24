import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartHeaderList from '../../components/Header/HeaderCart/components/CartHeaderList';
import { deleteItemInCart, getCarts } from '../../redux/apiCall';
import { deleteCartSuccess } from '../../redux/cartSlice';
import { removeCart } from './cartSlice';


HeaderCartContainer.propTypes = {};

function HeaderCartContainer(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        getCarts(dispatch)
    }, [])

    const carts = useSelector(state => state.carts.carts)

    const handleDeleteItemInCart = (id) => {
        deleteItemInCart(dispatch, id)
    }

    return (
        <>
            <CartHeaderList
                cartList={carts}
                handleDeleteItemInCart={handleDeleteItemInCart}
            />
        </>
    );
}

export default HeaderCartContainer;