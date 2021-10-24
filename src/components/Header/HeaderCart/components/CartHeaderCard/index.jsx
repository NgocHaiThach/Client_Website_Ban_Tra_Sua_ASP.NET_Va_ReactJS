import React from 'react';
import { formatPrice } from '../../../../../utils/FormatPrice';


CartHeaderCard.propTypes = {};

function CartHeaderCard(props) {
    const { item, handleDeleteItemInCart } = props

    const onDeleteItem = (id) => {
        if (handleDeleteItemInCart) handleDeleteItemInCart(id)
    }
    return (
        <>
            <img src={item.product.image} alt={item.product.name} className="header__cart-img" />
            <div className="header__cart-item-info">
                <div className="header__cart-item-head">
                    <h5 className="header__cart-item-name">{item.product.name}</h5>
                    <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">{formatPrice(item.product.price)}đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">{item.quantity}</span>
                    </div>
                </div>
                <div className="header__cart-body">
                    <span className="header__cart-description">
                        Phân loại hàng: Trà sữa
                    </span>
                    <span onClick={() => { onDeleteItem(item.id) }} className="header__cart-item-remove">Xóa</span>
                </div>
            </div>
        </>
    );
}

export default CartHeaderCard;