import React, { useState } from 'react';
import './style.css'
import { formatPrice } from '../../../../../utils/FormatPrice';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ProductItemDetail.propTypes = {};

export let number = 0

function ProductItemDetail(props) {

    const { item, handleAddItemToCartClick } = props

    //trạng thái số lượng 
    let [quantity, setQuantity] = useState(1)

    //tăng số lượng
    const onAdd = () => {
        quantity += 1
        setQuantity(quantity)
    }

    //giảm số lượng
    const onDecreas = () => {
        if (quantity > 1) {
            quantity -= 1
            setQuantity(quantity)
        }
    }

    //truyền state ra 
    number = quantity

    const onAddToCart = (productValues) => {
        handleAddItemToCartClick(productValues)

        toast.info('Thêm vào giỏ hàng thành công', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    return (
        <>{item &&
            <div className="wrapper row">
                <div className="col l-6">
                    <div className="preview-pic tab-content">
                        <div className="tab-pane active" id="pic-1">
                            <img
                                src={item.product.image} />
                        </div>
                    </div>
                </div>
                <div className="col l-6">
                    <div className="product__detail">
                        <h3 className="product__title">{item.product.name}</h3>

                        <p className="product__description">{item.product.description}</p>
                        <h4 className="product__price">Đơn Giá: <span>{formatPrice(item.product.price)}đ</span></h4>

                        <h5 className="sizes">sizes:
                            <span className="size size__active">s</span>
                            <span className="size">m</span>
                            <span className="size">l</span>
                        </h5>
                        <div className="quantity">
                            <h5 className="quantity__title">số lượng:
                            </h5>
                            <div className="quantity__number">
                                <span onClick={() => onDecreas()} className="quantity__number-minus">- </span>
                                <input className="quantity__number-text" type="text" value={quantity} />
                                <span onClick={() => onAdd()} className="quantity__number-plus"> +</span>
                            </div>
                        </div>
                        <div className="size-ice">
                            <p className="size-ice__title">Ice:</p>
                            <span className="size-ice__item">
                                <input checked="checked" type="radio" id="ice" name="ice" value="30" />
                                <label htmlFor="ice">25%</label><br />
                            </span>
                            <span className="size-ice__item">
                                <input type="radio" id="ice" name="ice" value="30" />
                                <label htmlFor="ice">50%</label><br />
                            </span>
                            <span className="size-ice__item">
                                <input type="radio" id="ice" name="ice" value="30" />
                                <label htmlFor="ice">75%</label><br />
                            </span>
                            <span className="size-ice__item">
                                <input type="radio" id="ice" name="ice" value="30" />
                                <label htmlFor="ice">100%</label><br />
                            </span>
                        </div>

                        <div className="size-sugar">
                            <p className="size-sugar__title">Sugar:</p>
                            <span className="size-sugar__item">
                                <input checked="checked" type="radio" id="sugar" name="sugar" value="30" />
                                <label htmlFor="sugar">25%</label><br />
                            </span>
                            <span className="size-sugar__item">
                                <input type="radio" id="sugar" name="sugar" value="30" />
                                <label htmlFor="sugar">50%</label><br />
                            </span>
                            <span className="size-sugar__item">
                                <input type="radio" id="sugar" name="sugar" value="30" />
                                <label htmlFor="sugar">75%</label><br />
                            </span>
                            <span className="size-sugar__item">
                                <input type="radio" id="sugar" name="sugar" value="30" />
                                <label htmlFor="sugar">100%</label><br />
                            </span>
                        </div>

                        <div className="action">
                            <button
                                onClick={() => { onAddToCart(item,) }}
                                className="add-to-cart btn btn-default"
                                type="button">
                                Thêm vào giỏ
                            </button>
                            <div className="action-select-toping">

                                <select id="test">
                                    <option value="1">toping</option>
                                    <option value="2">toping</option>
                                    <option value="3">toping</option>
                                    <option value="4">toping</option>
                                    <option value="5">toping</option>
                                    <option value="6">toping</option>
                                    <option value="7">toping</option>
                                    <option value="8">toping</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default ProductItemDetail;