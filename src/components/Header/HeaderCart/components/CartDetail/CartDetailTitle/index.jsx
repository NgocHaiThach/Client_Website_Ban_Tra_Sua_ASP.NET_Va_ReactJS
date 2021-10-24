import React from 'react';
import PropTypes from 'prop-types';

CartDetailTitle.propTypes = {

};

function CartDetailTitle(props) {
    return (
        <div className="column-labels">
            <label className="col l-3 column-labels__image">Giỏ hàng</label>
            <label className="col l-3 column-labels__details">Sản phẩm</label>
            <label className="col l-2 column-labels__price">Đơn giá</label>
            <label className="col l-1 column-labels__quantity">Số lượng</label>
            <label className="col l-1 column-labels__removal"></label>
            <label className="col l-2 column-labels__line-price">Tổng</label>
        </div>
    );
}

export default CartDetailTitle;