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
            <img src={item.product.image} alt={item.product.productName} className="header__cart-img" />
            <div className="header__cart-item-info">
                <div className="header__cart-item-head">
                    <h5 className="header__cart-item-name">{item.product.productName}</h5>
                    <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">{formatPrice(item.dishPrice)}đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">{item.quantily}</span>
                    </div>
                </div>
                <div className="header__cart-body">
                    <div className="header__cart-size">
                        Size: {item.sizeName}
                    </div>
                    {/* <br /> */}

                    {/* <span className="header__cart-description">
                        Toppings: {item.topping.toppingName}
                    </span> */}

                    <span onClick={() => { onDeleteItem(item.id) }} className="header__cart-item-remove">Xóa</span>
                </div>
                <div className="header__cart-description">
                    {/* Size: {item.sizeName} */}
                    Toppings: {item.topping.toppingName}
                </div>
            </div>
        </>
    );
}

export default CartHeaderCard;