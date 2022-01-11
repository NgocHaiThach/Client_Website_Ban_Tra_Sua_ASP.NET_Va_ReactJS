import React from 'react';
import { formatPrice } from '../../../../../utils/FormatPrice';


CartHeaderCard.propTypes = {};

function CartHeaderCard(props) {
    let item = props.item
    let handleDeleteItemInCart = props.handleDeleteItemInCart

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
                        <span className="header__cart-item-price">{
                            item.topping !== null ?
                                formatPrice((item.product.price + +item.size.price + +item.topping.price))
                                :
                                formatPrice((item.product.price + +item.size.price))
                        }đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">{item.quantily}</span>
                    </div>
                </div>
                <div className="header__cart-body">
                    <div className="header__cart-size">
                        Size: {item.sizeName}
                    </div>
                    <span onClick={() => { onDeleteItem(item.dishId) }} className="header__cart-item-remove">Xóa</span>
                </div>
                <div className="header__cart-description">
                    {/* Size: {item.sizeName} */}
                    Toppings: {item.topping === null ? '' : item.topping.toppingName}
                </div>
            </div>
        </>
    );
}

export default CartHeaderCard;