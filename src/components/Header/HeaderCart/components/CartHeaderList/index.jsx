import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import CartHeaderCard from '../CartHeaderCard';
import './style.css'

CartHeaderList.propTypes = {
};

CartHeaderList.defaultProps = {
}

function CartHeaderList(props) {
    const { cartList, handleDeleteItemInCart } = props
    const cartEmpty = cartList.length <= 0
    //const cartEmpty = true
    return (
        <>
            {/* <!-- SEARCH  CART --> */}
            <div className="header__cart">
                <div className="header__cart-wrap">
                    <i className="header__cart-icon fas fa-shopping-cart"></i>
                    {cartEmpty ? '' : <> <span className="header__cart-notice">{cartList.length}</span></>}

                    {/* <!-- No cart: header__cart-list--no-cart --> */}
                    <div className="header__cart-list">
                        {cartEmpty ?
                            <>
                                <img src='https://hoplongtech.com/uploads/1.0.1/emptycart.png' alt="Giỏ Hàng Trống" className="header__cart-no-cart-img" />
                                <span className="header__cart-list-no-cart-msg">
                                    Chưa có sản phẩm
                                </span>
                            </> :
                            <>
                                <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                                <ul className="header__cart-list-item">
                                    {/* <!-- CART ITEM --> */}
                                    {cartList.map((cart, index) => (
                                        <li key={index} className="header__cart-item">
                                            <CartHeaderCard
                                                item={cart}
                                                handleDeleteItemInCart={handleDeleteItemInCart} />
                                        </li>
                                    ))}

                                </ul>

                                <Link to="/cart" className="header__cart-view-cart btn btn--primary">Xem giỏ hàng</Link>
                            </>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartHeaderList;