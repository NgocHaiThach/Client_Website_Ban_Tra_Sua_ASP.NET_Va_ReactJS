import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { Link } from 'react-router-dom';
import cookies from 'react-cookies';
import { formatPrice } from '../../utils/FormatPrice';


function Bill(props) {
    const { listCart } = props;

    const infoPayment = JSON.parse(localStorage.getItem('info_payment'))
    const typePayment = localStorage.getItem('type_payment')
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const timeBill = `${date}/${month < 10 ? `0${month}` : `${month}`}/${year}`

    let tempPrice = 0
    for (let i = 0; i < listCart.length; i++) {
        tempPrice += (listCart[i].product.price + listCart[i].size.price) * listCart[i].quantily
    }
    const totalPrice = tempPrice + 15000

    return (
        <div className="d">
            <div className="bill__title">
                đơn hàng 100319 {timeBill}
            </div>
            <div className="bill__border">
                <div className="bill__description">
                    <p> Xin chào {infoPayment.name}</p>
                    <p> Đơn hàng #100319 đã được đặt thành công và chúng tôi đang xử lý</p>
                    <p> {typePayment} </p>
                </div>
                <div className="bill__id">
                    [Đơn hàng #100319] ({timeBill})
                </div>
                <div className="bill__table">
                    <table >
                        <thead>
                            <tr>
                                <th className="w-30 table-body__title">Tên</th>
                                <th className="w-20 table-body__title">S.Lượng</th>
                                <th className="w-20 table-body__title">Size</th>
                                <th className="w-20 table-body__title">Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listCart.map((item, index) => (
                                <tr>
                                    <td className="table-body__item-name w-30 table-body__item ">{item.product.productName}</td>
                                    <td className="w-20 table-body__item ">{item.quantily}</td>
                                    <td className="w-20 table-body__item ">{item.sizeName}</td>
                                    <td className="w-20 table-body__item">{formatPrice((item.product.price + item.size.price) * item.quantily)}đ</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <table >
                        <thead>
                            <tr>

                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className="table-body__item-name w-30 table-body__item">Tổng số phụ:</td>
                                <td className="w-20 table-body__item ">{formatPrice(tempPrice)}đ</td>
                            </tr>
                            <tr >
                                <td className="table-body__item-name w-30 table-body__item">Giao nhận hàng:</td>
                                <td className="w-20 table-body__item ">15.000đ</td>
                            </tr>
                            <tr >
                                <td className="table-body__item-name w-30 table-body__item"> Phương thức thanh toán:</td>
                                <td className="w-20 table-body__item ">{typePayment}</td>
                            </tr>
                            <tr >
                                <td className="table-body__item-name w-30 table-body__item">Tổng cộng:</td>
                                <td className="w-20 table-body__item ">{formatPrice(totalPrice)}đ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bill__addres">
                    <div>
                        <div className="bill__addres-title">
                            Địa chỉ thanh toán
                        </div>
                        <div className="bill__addres-name">
                            {infoPayment.name}
                        </div>
                        <div className="bill__addres-home-number">
                            {infoPayment.home}
                        </div>
                        <div className="bill__addres-home-ward">
                            {infoPayment.ward}
                        </div>
                        <div className="bill__addres-home-distric">
                            {infoPayment.district}
                        </div>
                        <div className="bill__addres-home-province">
                            {infoPayment.province}
                        </div>
                        <div className="bill__addres-home-phone">
                            <a href="tel:0971018920">{infoPayment.phone}</a>
                        </div>
                    </div>
                    <div>
                        <div className="bill__addres-title">
                            Địa chỉ giao hàng
                        </div>
                        <div className="bill__addres-name">
                            {infoPayment.name}
                        </div>
                        <div className="bill__addres-home-number">
                            {infoPayment.home}
                        </div>
                        <div className="bill__addres-home-ward">
                            {infoPayment.ward}
                        </div>
                        <div className="bill__addres-home-distric">
                            {infoPayment.district}
                        </div>
                        <div className="bill__addres-home-province">
                            {infoPayment.province}
                        </div>
                        <div className="bill__addres-home-phone">
                            <a href="tel:0971018920">{infoPayment.phone}</a>
                        </div>
                    </div>
                </div>
                <div className="bill__thanks">
                    Cảm ơn quý khách <Link to="/"> HDtrasua.vn! </Link>
                </div>

            </div>
        </div >
    );
}

export default Bill;