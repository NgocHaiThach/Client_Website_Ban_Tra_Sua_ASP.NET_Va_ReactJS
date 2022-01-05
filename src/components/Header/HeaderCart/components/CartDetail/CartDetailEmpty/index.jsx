import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

CartDetailEmpty.propTypes = {};

function CartDetailEmpty(props) {
    return (
        <div>
            <img src='https://hoplongtech.com/uploads/1.0.1/emptycart.png' alt="" className="cart-no-cart-img" />
            <div
                className="cart-empty__notify"
            >
                Giỏ hàng của bạn trống
            </div>
            <button
                className="btn cart-empty__button-redirect"
            >
                <Link to="/home/all"
                    className="button__back-home"
                >
                    Mua ngay
                </Link>
            </button>
        </div>
    );
}

export default CartDetailEmpty;