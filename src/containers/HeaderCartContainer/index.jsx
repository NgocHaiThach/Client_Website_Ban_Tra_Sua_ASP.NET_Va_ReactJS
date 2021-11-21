import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartHeaderList from '../../components/Header/HeaderCart/components/CartHeaderList';
import { deleteItemInCart, getCarts } from '../../redux/apiCall';
import { accessToken, idUser } from '../../utils/getToken';



HeaderCartContainer.propTypes = {};

function HeaderCartContainer(props) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(() => {
        // if (user.UserName) {
        getCarts(dispatch, accessToken, idUser)
        // }
    }, [])

    const cartList = useSelector(state => state.carts.carts.dishCarts)

    console.log('list', cartList)

    const handleDeleteItemInCart = (id) => {
        if (user.UserName) {
            deleteItemInCart(dispatch, id, accessToken)
        }
    }

    return (
        <>
            {cartList && <CartHeaderList
                cartList={cartList}
                handleDeleteItemInCart={handleDeleteItemInCart}
            />}
        </>
    );
}

export default HeaderCartContainer;