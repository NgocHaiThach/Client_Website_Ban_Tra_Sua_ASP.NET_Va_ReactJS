import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import * as yup from 'yup';
import { formatPrice } from '../../utils/FormatPrice';
import { idUser } from '../../utils/getToken';
import { toast } from 'react-toastify'
import './style.css';


const schema = yup.object().shape({
    name: yup.string().required().max(50),
    phone: yup.string().required().min(10).max(10),
    email: yup.string().required().email(),
    province: yup.string().required(),
    district: yup.string().required(),
    ward: yup.string().required(),
    home: yup.string().required(),
    note: yup.string()
}).required();

function PaymentForm(props) {

    const { listCart, handleOder, handlePaymentOnline } = props;

    const typepays = [
        {
            id: 1,
            name: 'Trả tiền mặt khi nhận hàng'
        },
        {
            id: 2,
            name: 'Chuyển khoản ngân hàng'
        },
    ]

    const [typePay, setTypePay] = useState(1)
    const history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    localStorage.setItem('infoCart', JSON.stringify(listCart))
    localStorage.setItem('type_payment', typePay === 1 ? 'Trả tiền mặt khi nhận hàng' : 'Chuyển khoản ngân hàng')

    const onSubmit = (data) => {
        if (listCart.length > 0) {
            localStorage.setItem('info_payment', JSON.stringify(data))
            if (typePay === 1) {
                handleOder(data)
                history.push(`/bill/${idUser}`)
            }
            else {
                handlePaymentOnline(data)
                history.push(`/bill/${idUser}`)
            }

        }
        else {
            toast.warn('Giỏ hàng trống', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    const infoPayment = JSON.parse(localStorage.getItem('info_payment')) || {}

    let tempPrice = 0
    for (let i = 0; i < listCart.length; i++) {
        tempPrice += (listCart[i].product.price + listCart[i].size.price) * listCart[i].quantily
    }

    const totalPrice = tempPrice + 15000

    //xử lý  thanh toán

    // const onOder = () => {
    //     if (handleOder) {
    //         handleOder()
    //     }
    // }



    return (
        <div className="grid wide">
            <div className="">
                <div className="payment__title">
                    thanh toán
                </div>
                <div className="payment__wrapper">
                    <div className="payment__border">
                        <div className="payment__address">
                            <div className="payment__address-title">
                                thông tin thanh toán
                            </div>
                            <div className="payment__note">
                                * Sản phẩm chỉ giao trong nội thành TP.HCM
                            </div>
                            <div className="payment__address-name">
                                <label className="payment__address-name__label">
                                    Họ và tên *
                                </label>
                                <br />
                                <input
                                    name="name"
                                    className="payment__address-name__input"
                                    type="text"
                                    placeholder="Họ tên"
                                    {...register("name")}
                                    defaultValue={infoPayment.name}
                                />
                            </div>
                            <div className="validate__left-and-right">
                                {errors?.name?.type === "required" && <p className="valid-form__message validate__left">* Vui lòng nhập tên</p>}
                                {errors?.name?.type === "min" && <p className="valid-form__message validate__left">Tên phải dài hơn 5 ký tự</p>}
                            </div>
                            <div className="payment__address-phone-and-mail">
                                <div className="payment__address-phone">
                                    <label className="payment__address-phone__label">
                                        Số điện thoại *
                                    </label>
                                    <br />
                                    <input
                                        name="phone"
                                        className="payment__address-phone__input"
                                        type="text"
                                        placeholder="Số điện thoại "
                                        {...register("phone")}
                                        defaultValue={infoPayment.phone}
                                    />
                                </div>

                                <div className="payment__address-mail">
                                    <label className="payment__address-mail__label">
                                        Địa chỉ mail *
                                    </label>
                                    <br />
                                    <input
                                        name="email"
                                        className="payment__address-mail__input"
                                        type="text"
                                        placeholder="Email"
                                        {...register("email")}
                                        defaultValue={infoPayment.email}
                                    />
                                </div>
                            </div>
                            <div className="validate__left-and-right">
                                {errors?.phone?.type === "required" && <p className="valid-form__message validate__left">* Vui lòng nhập số điện thoại</p>}
                                {errors?.phone?.type === "min" && <p className="valid-form__message validate__left ">* Vui lòng nhập đúng số điện thoại</p>}
                                {errors?.phone?.type === "max" && <p className="valid-form__message validate__left">* Vui lòng nhập đúng số điện thoại</p>}

                                {errors?.email?.type === "required" && <p className="valid-form__message validate__right">* Vui lòng nhập email</p>}
                                {errors?.email?.type === "email" && <p className="valid-form__message validate__right">* Vui lòng nhập đúng email </p>}
                            </div>

                            <div className="payment__address-province-and-district">
                                <div className="payment__address-province">
                                    <label className="payment__address-province__label">
                                        Tỉnh / Thành phố *
                                    </label>
                                    <br />
                                    <input
                                        name="province"
                                        className="payment__address-province__input"
                                        type="text"
                                        placeholder="Tỉnh / Thành phố"
                                        {...register("province")}
                                        defaultValue={infoPayment.province}
                                    />
                                </div>
                                <div className="payment__address-district">
                                    <label className="payment__address-district__label">
                                        Quận / Huyện *
                                    </label>
                                    <br />
                                    <input
                                        name="district"
                                        className="payment__address-district__input"
                                        type="text"
                                        placeholder="Quận / Huyện"
                                        {...register("district")}
                                        defaultValue={infoPayment.district}
                                    />
                                </div>
                            </div>
                            <div className="validate__left-and-right">
                                {errors?.province?.type === "required" && <p className="valid-form__message validate__left">* Vui lòng nhập tỉnh / thành phố</p>}
                                {errors?.district?.type === "required" && <p className="valid-form__message validate__right">* Vui lòng nhập quận / huyện</p>}
                            </div>

                            <div className="payment__address-ward-and-home">
                                <div className="payment__address-ward">
                                    <label className="payment__address-ward__label">
                                        Xã / Phường *
                                    </label>
                                    <br />
                                    <input
                                        name="ward"
                                        className="payment__address-ward__input"
                                        type="text"
                                        placeholder="Xã / Phường"
                                        {...register("ward")}
                                        defaultValue={infoPayment.ward}
                                    />
                                </div>
                                <div className="payment__address-home">
                                    <label className="payment__address-home__label">
                                        Địa chỉ *
                                    </label>
                                    <br />
                                    <input
                                        name="home"
                                        className="payment__address-home__input"
                                        type="text"
                                        placeholder="Địa chỉ"
                                        {...register("home")}
                                        defaultValue={infoPayment.home}
                                    />
                                </div>
                            </div>

                            <div className="validate__left-and-right">
                                {errors?.ward?.type === "required" && <p className="valid-form__message validate__left">* Vui lòng nhập xã / phường</p>}
                                {errors?.home?.type === "required" && <p className="valid-form__message validate__right">* Vui lòng nhập địa chỉ</p>}
                            </div>

                            <div className="payment__address-note">
                                <label className="payment__address-note__label">
                                    Ghi Chú
                                </label>
                                <br />
                                <textarea
                                    name="note"
                                    className="payment__address-note__input"
                                    type="text"
                                    placeholder="Ghi chú về đơn hàng, Ví dụ: thời gian hay chỉ dẫn địa chỉ chi tiết hơn"
                                    {...register("note")}
                                    defaultValue={infoPayment.note}
                                />
                            </div>
                        </div>
                        <div className="payment__info">
                            <div className="payment__info-title">
                                Đơn hàng của bạn
                            </div>
                            <div className="payment__info-list">
                                <div className="payment__info-list__title">
                                    <div className="payment__info-list__title-name">
                                        Sản phẩm
                                    </div>
                                    <div className="payment__info-list__title-price">
                                        Tạm tính
                                    </div>
                                </div>
                                {listCart.map((item, index) => (
                                    <div key={index} className="payment__info-list__item">
                                        <div className="payment__info-list__item-name">
                                            {item.product.productName} {item.sizeName} x{item.quantily}
                                        </div>
                                        <div className="payment__info-list__item-price">
                                            {formatPrice((item.quantily) * (item.product.price + item.size.price))}đ
                                        </div>
                                    </div>
                                ))}
                                <div className="payment__info-list__total">
                                    <div className="payment__info-list__total-title">
                                        Tạm tính
                                    </div>
                                    <div className="payment__info-list__total-price">
                                        {formatPrice(tempPrice)}đ
                                    </div>
                                </div>

                                <div className="payment__info-list__ship">
                                    <div className="payment__info-list__ship-title">
                                        Giao hàng
                                    </div>
                                    <div className="payment__info-list__ship-price">
                                        15.000đ
                                    </div>
                                </div>

                                <div className="payment__info-list__total">
                                    <div className="payment__info-list__total-title toltal__price">
                                        Tổng
                                    </div>
                                    <div className="payment__info-list__ship-price toltal__price">
                                        {formatPrice(totalPrice)}đ
                                    </div>
                                </div>
                            </div>
                            <div className="payment__info-type">
                                {typepays.map(type => (
                                    <div key={type.id} className="payment__info-type__cash">
                                        <input
                                            onChange={() => setTypePay(type.id)}
                                            checked={typePay === type.id}
                                            type="radio" />
                                        <span>{type.name}</span>
                                    </div>
                                ))}
                                {/* <div className="payment__info-type__transfer">
                                <input type="radio" />
                                <span>Chuyển khoản ngân hàng </span>
                            </div> */}
                            </div>
                            <div onClick={handleSubmit(onSubmit)} className="payment__info-button">
                                {/* to={`/bill/${idUser}`} */}
                                <button
                                    className="btn btn-payment"
                                >
                                    Đặt Hàng
                                </button>
                            </div>
                            <div className="payment__info-thanks">
                                Cảm ơn quý khách đã ủng hộ Ottel shop!
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default PaymentForm;