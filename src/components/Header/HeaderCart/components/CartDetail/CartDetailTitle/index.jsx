import React from 'react';
import PropTypes from 'prop-types';

CartDetailTitle.propTypes = {

};

function CartDetailTitle(props) {
    return (
        <div className="column-labels">
            <label className="col l-3 m-3 c-3 column-labels__image hide-on-mobile">Giỏ hàng</label>
            <label className="col l-3 m-3 c-3 column-labels__details">Sản phẩm</label>
            <label className="col l-2 m-2 c-2 column-labels__price">Đơn giá</label>
            <label className="col l-1 m-1 c-1 column-labels__quantity">Số lượng</label>
            <label className="col l-1 m-1 c-1 column-labels__removal"></label>
            <label className="col l-2 m-2 c-2 column-labels__line-price">Tổng</label>
        </div>
    );
}

export default CartDetailTitle;