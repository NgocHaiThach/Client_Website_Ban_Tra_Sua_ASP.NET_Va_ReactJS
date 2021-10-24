import React from 'react';
import PropTypes from 'prop-types';
import CartDetailCard from '../CartDetailCard';
import CartDetailEmpty from '../CartDetailEmpty';
import CartDetailResult from '../CartDetailResult';
import CartDetailTitle from '../CartDetailTitle';

import './style.css'

CartDeatilList.propTypes = {
    cartList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            product: PropTypes.shape({
                idCategory: PropTypes.number.isRequired,
                name: PropTypes.string,
                image: PropTypes.string,
                price: PropTypes.string,
                description: PropTypes.string,
                inventory: PropTypes.number,
                rating: PropTypes.number,
            }),
            quantity: PropTypes.number,
        })),
};

CartDeatilList.defaultProps = {
    cartList: PropTypes.arrayOf(
        PropTypes.shape({
            id: null,
            product: PropTypes.shape({
                idCategory: null,
                name: '',
                image: '',
                price: '',
                description: '',
                inventory: null,
                rating: null,
            }),
            quantity: null,
        })),
}

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
                        <div className="col l-12">
                            <CartDetailTitle />
                        </div>
                    </div>

                    <div className="row">
                        {cartList.map((cart) => (
                            <div key={cart.id} className="col l-12">
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
                        <div className="col l-12">
                            {showCartDeatilResult(cartList)}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default CartDeatilList;