import React, { useState } from 'react';
import { formatPrice } from '../../../../../../utils/FormatPrice';

CartDetailCard.propTypes = {};

function CartDetailCard(props) {
    const { item, handleDeleteItemInCart, handleDecreaseInCart, handleAddInCart } = props
    const totalPrice = (+item.product.price * +item.quantity)



    const clickDeleteItem = (id) => {
        if (handleDeleteItemInCart) {
            handleDeleteItemInCart(id)
        }
    }

    const onDecreaseQuantity = (item) => {
        if (handleDecreaseInCart) handleDecreaseInCart(item)
    }

    const onAddQuantity = (item) => {
        if (handleAddInCart) handleAddInCart(item)
    }

    return (
        <>
            <div className="product-item">

                <div className="col l-3 product-item__image">
                    <img src={item.product.image} />
                </div>
                <div className="col l-3 product-details">
                    <span className="product-item__title">{item.product.name}</span>
                    <p className="product-item__description">{item.product.description}</p>
                </div>
                <div className="col l-2 product-item__price">{formatPrice(item.product.price)}đ</div>
                <div className="col l-1 product-item__quantity">
                    <div className="product-quantity__number">
                        <span
                            className="product-quantity__number-minus"
                            onClick={() => { onDecreaseQuantity(item) }}
                        >- </span>
                        <input className="product-quantity__number-text" type="text" value={item.quantity} />
                        {/* <span>{quantity}</span> */}
                        <span
                            className="product-quantity__number-plus"
                            onClick={() => { onAddQuantity(item) }}
                        > +</span>
                    </div>
                </div>
                <div className="col l-1 product-item__removal">
                    <span
                        className="remove__product-item"
                        onClick={() => { clickDeleteItem(item.id) }}
                    >
                        Xoá
                    </span>
                </div>
                <div className="col l-2 product-item__line-price">{formatPrice(totalPrice)}đ</div>
            </div>
            <div className="border-product"></div>
        </>
    );
}

export default CartDetailCard;