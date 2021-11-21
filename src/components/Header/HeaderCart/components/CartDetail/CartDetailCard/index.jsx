import React, { useState } from 'react';
import { formatPrice } from '../../../../../../utils/FormatPrice';

CartDetailCard.propTypes = {};

function CartDetailCard(props) {
    const { item, handleDeleteItemInCart, handleDecreaseInCart, handleAddInCart } = props
    const productPrice = +item.product.price
    const sizePrice = +item.size.price
    //const toppingPrice = +item.topping.price
    const quantity = +item.quantily
    const isTopping = item.topping

    const totalPrice = isTopping ?
        ((productPrice + sizePrice) * quantity)
        :
        ((productPrice + sizePrice) * quantity)

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
                    <span className="product-item__title">{item.product.productName}</span>
                    <p className="product-item__description">Size: {item.sizeName}  {item.topping === null ? '' : `+ ${item.topping.toppingName} (+${formatPrice(item.topping.price)}đ)`}</p>
                </div>
                <div className="col l-2 product-item__price">{formatPrice(productPrice + sizePrice)}đ</div>
                <div className="col l-1 product-item__quantity">
                    <div className="product-quantity__number">
                        <button
                            className="product-quantity__number-minus"
                            onClick={() => { onDecreaseQuantity(item) }}
                        >-
                        </button>
                        <input className="product-quantity__number-text" type="text" value={item.quantily} />

                        <button
                            className="product-quantity__number-plus"
                            onClick={() => { onAddQuantity(item) }}
                        > +
                        </button>
                    </div>
                </div>
                <div className="col l-1 product-item__removal">
                    <span
                        className="remove__product-item"
                        onClick={() => { clickDeleteItem(item.dishId) }}
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