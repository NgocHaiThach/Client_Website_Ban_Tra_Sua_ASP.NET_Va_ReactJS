import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartHeaderList from '../../components/Header/HeaderCart/components/CartHeaderList';
import { deleteItemInCart, getCarts } from '../../redux/apiCall';
import { deleteCartSuccess } from '../../redux/cartSlice';
import { removeCart } from './cartSlice';
import cookies from 'react-cookies';
import jwt_decode from 'jwt-decode';


HeaderCartContainer.propTypes = {};

function HeaderCartContainer(props) {
    const dispatch = useDispatch()
    const accessToken = cookies.load('user')
    //const idUser = jwt_decode(accessToken).UserId

    useEffect(() => {
        getCarts(dispatch, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJNaWxrVGVhU2VydmljZUFjY2Vzc1Rva2VuIiwianRpIjoiOTQ4MWQ1NGEtZjA2ZS00MTU3LTg1YmItNDhlY2U0ZmE5YzEwIiwiaWF0IjoiMTEvMTIvMjAyMSAyOjA0OjI0IFBNIiwiVXNlcklkIjoiMSIsIlVzZXJOYW1lIjoiMDMzNDA3MTA1NiIsIlBhc3N3b3JkIjoiMTIzNDU2NzgiLCJleHAiOjE2MzY4MTIyNjQsImlzcyI6Ik1pbGtUZWFBdXRoZW50aWNhdGlvblNlcnZlciIsImF1ZCI6Ik1pbGtUZWFTZXJ2aWNlUG9zdG1hbkNsaWVudCJ9.s1CaaFaQtMuJGtMvcD9ird8k7n8NOEnYKPdzbf7C6fg', 1)
    }, [])

    const cartList = useSelector(state => state.carts.carts.dishCarts)
    // const cartList = carts.dishCarts
    console.log('list', cartList)

    const handleDeleteItemInCart = (id) => {
        deleteItemInCart(dispatch, id)
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