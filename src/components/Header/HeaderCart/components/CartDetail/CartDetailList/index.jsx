import React from 'react';
import PropTypes from 'prop-types';
import CartDetailCard from '../CartDetailCard';
import CartDetailEmpty from '../CartDetailEmpty';
import CartDetailResult from '../CartDetailResult';
import CartDetailTitle from '../CartDetailTitle';

import './style.css'

CartDeatilList.propTypes = {};

CartDeatilList.defaultProps = {}

function CartDeatilList(props) {
    const { cartList, handleDeleteItemInCart, handleDecreaseInCart, handleAddInCart } = props
    const cartEmpty = cartList.length <= 0
    const showCartDeatilResult = (cartList) => {
        let result = null;
        if (cartList.length > 0) {
            result = <CartDetailResult cartList={cartList} />
        }
        return result
    }

    return (
        cartEmpty ?
            <>
                <CartDetailEmpty />
            </> :
            <div className="grid wide">

                <div className="shopping-cart">

                    <div className="row">
                        <div className="col l-12 m-12 c-12">
                            <CartDetailTitle />
                        </div>
                    </div>

                    <div className="row">
                        {cartList.map((cart, index) => (
                            <div key={index} className="col l-12 m-12 c-12">
                                <CartDetailCard
                                    item={cart}
                                    handleDeleteItemInCart={handleDeleteItemInCart}
                                    handleDecreaseInCart={handleDecreaseInCart}
                                    handleAddInCart={handleAddInCart}
                                />

                            </div>
                        ))}
                    </div>

                    <div className="row">
                        <div className="col l-12 m-12 c-12">
                            {showCartDeatilResult(cartList)}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default CartDeatilList;