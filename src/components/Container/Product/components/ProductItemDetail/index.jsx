import React, { useEffect, useState } from 'react';
import './style.css'
import { formatPrice } from '../../../../../utils/FormatPrice';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import RequestApi from '../../../../../utils/RequestApi'
import { accessToken, idUser } from '../../../../../utils/getToken';

ProductItemDetail.propTypes = {};

export let number = 0

function ProductItemDetail(props) {

    const { item, handleAddItemToCartClick } = props
    //console.log('item price', item.price)
    const [productPrice, setProductPrice] = useState(29000)



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

    const onAddToCart = (idProduct, quantity, size, ice, sugar, topping) => {
        const valuesAdd = {
            cartId: idUser,
            productId: idProduct,
            quantily: quantity,
            sizeName: size,
            ice: ice,
            sugar: sugar,
            toppingId: topping,
            accessToken: accessToken
        }
        handleAddItemToCartClick(valuesAdd)

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


    // xử  lý size product
    const sizes = [
        {
            name: 'S',
            id: 0
        },
        {
            name: 'M',
            id: 1
        },
        {
            name: 'L',
            id: 2
        }
    ]

    const [active, setActive] = useState(0)
    const classNameOfSize = 'size'
    const classNameOfSizeAcive = 'size size__active'

    //xử lý toppings
    const [toppings, setToppings] = useState([]);
    useEffect(() => {
        async function getTopping() {
            const res = await RequestApi('api/toppings', 'GET')
            setToppings([...res.data])
        }
        getTopping()
    }, [])

    const [openTopping, setOpenTopping] = useState(false)

    // xử lý ice 
    const [checkedIce, setCheckedIce] = useState(3)
    const percentIce = [
        {
            name: '25%',
            id: 0
        },
        {
            name: '50%',
            id: 1
        },
        {
            name: '75%',
            id: 2
        },
        {
            name: '100%',
            id: 3
        },
    ]

    // xử lý sugar
    const [checkedSugar, setCheckedSugar] = useState(3)
    const percentSuagar = [
        {
            name: '25%',
            id: 0
        },
        {
            name: '50%',
            id: 1
        },
        {
            name: '75%',
            id: 2
        },
        {
            name: '100%',
            id: 3
        },
    ]

    // xử lý topping 
    const [selectTopping, setSelectTopping] = useState(null)

    useEffect(() => {
        if (active === 0) {
            setProductPrice(29000)
        }
        else if (active === 1) {
            setProductPrice(35000)
        }
        else if (active === 2) {
            setProductPrice(41000)
        }
    }, [active])


    return (
        <>
            {item &&
                <div className="wrapper row col c-12">
                    <div className="col l-6 m-6 c-12">
                        <div className="preview-pic tab-content">
                            <div className="tab-pane active" id="pic-1">
                                <img
                                    src={item.image} />
                            </div>
                        </div>
                    </div>
                    <div className="col l-6 m-6 c-12">
                        <div className="product__detail">
                            <h3 className="product__title">{item.productName}</h3>
                            {/* <p>Vị trà đậm và thơm kết hợp hòa quyện với lớp kem sữa mặn.
                                <br />
                                Lượng đường (g): 22.7 (S), 22.7 (M), 31.5 (L).
                                <br />
                                Caffeine: 40.2 (S), 46.7 (M), 68.4 (L).
                                <br />
                                Calories: 220.8 (S), 266.1(M), 360.9 (L)</p> */}

                            <p className="product__description">{item.Description}</p>
                            <h4 className="product__price">
                                Đơn Giá:
                                <span>
                                    {formatPrice(productPrice)}đ
                                </span>
                            </h4>

                            <h5 className="sizes">size:
                                {sizes.map((size, index) => (
                                    <div key={index} style={{ display: 'inline-block' }}>
                                        <span
                                            onClick={() => setActive(size.id)}
                                            className={active === size.id ? classNameOfSizeAcive : classNameOfSize}
                                        >{size.name}</span>
                                    </div>
                                ))}
                            </h5>
                            <div className="quantity">
                                <h5 className="quantity__title">số lượng:
                                </h5>
                                <div className="quantity__number">
                                    <button
                                        onClick={() => onDecreas()}
                                        className="quantity__number-minus"
                                    >
                                        -
                                    </button>

                                    <input
                                        className="quantity__number-text"
                                        type="text"
                                        value={quantity}
                                    />

                                    <button
                                        onClick={() => onAdd()}
                                        className="quantity__number-plus">
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="size-ice">
                                <p className="size-ice__title">Đá:</p>
                                {percentIce.map((percent, index) => (
                                    <span key={index} className="size-ice__item">
                                        <input
                                            onChange={() => setCheckedIce(percent.id)}
                                            checked={checkedIce === percent.id}
                                            type="radio"
                                        />
                                        {percent.name}
                                    </span>
                                ))}
                            </div>

                            <div className="size-sugar">
                                <p className="size-sugar__title">Đường:</p>

                                {percentSuagar.map((percent, index) => (
                                    <span key={index} className="size-sugar__item">
                                        <input
                                            onChange={() => setCheckedSugar(percent.id)}
                                            checked={checkedSugar === percent.id}
                                            type="radio"
                                        />
                                        {percent.name}
                                    </span>
                                ))}
                            </div>

                            <div className="action">
                                <button
                                    onClick={() => { onAddToCart(item.productId, quantity, sizes[active].name, checkedIce, checkedSugar, selectTopping) }}
                                    className="add-to-cart btn btn-default"
                                    type="button">
                                    Thêm vào giỏ
                                </button>
                                <div className="action-select-toping">
                                    {/* <select onClick={() => {
                                        setOpenTopping(!openTopping)
                                        
                                        }}>
                                        <option value="2">Thạch Rau Câu</option>
                                    </select> */}
                                    <div className="select-display-toping">
                                        <div className="select-display__title" onClick={() => setOpenTopping(!openTopping)}>Toppings</div>
                                        <i onClick={() => setOpenTopping(!openTopping)} className="fas fa-chevron-down select-display__icon"></i>
                                    </div>
                                    {/* <select > */}
                                    <div className="toping-list">
                                        {toppings.length > 0 && toppings.map((topping, index) => (
                                            <div
                                                className="toping-item"
                                                key={index}
                                                style={openTopping ? { display: 'inline-block' } : { display: 'none' }}
                                            >
                                                <input
                                                    style={{ textAlign: 'center' }}
                                                    type="radio"
                                                    checked={selectTopping === topping.toppingId}
                                                    onChange={() => setSelectTopping(topping.toppingId)}
                                                />
                                                {topping.toppingName}
                                            </div>
                                        ))}
                                    </div>
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