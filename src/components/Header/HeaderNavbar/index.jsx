import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Images from '../../../constant/images';
import './style.css'
import cookies from 'react-cookies';
import { useHistory } from "react-router-dom";
import { computeHeadingLevel } from '@testing-library/dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/userSlice';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

export let displayFormLogin = false
export let displayFormRegis = false

HeaderNavbar.propTypes = {};

function HeaderNavbar(props) {
    const history = useHistory()
    const dispatch = useDispatch()

    const userName = useSelector(state => state.user)

    const onLogout = () => {
        cookies.remove('user')
        const action = logout()
        dispatch(action);
        displayFormLogin = true
    }

    const onEnableFormLogin = () => {
        displayFormLogin = true
    }

    const onEnableFormRegister = () => {
        displayFormRegis = true
    }

    return (
        <nav className="header__navbar hide-on-mobile-tablet">
            <ul className="header__navbar-list">
                <li className="header__navbar-item header__navbar-item--has-qr header__navbar-item--separate">
                    Vào cửa hàng trên ứng dụng TNH-Shop
                    {/* <!-- BEGIN HEADER QR CODE --> */}
                    <div className="header__qr">
                        <img src={Images.QR_CODE} alt="QR Code" className="header_qr-img" />
                        <div className="header__qr-apps">
                            <a href="" className="header__qr-link">
                                <img src={Images.GG_PLAY} alt="Google Play" className="header__qr-download-img" />
                            </a>
                            <a href="" className="header__qr-link">
                                <img src={Images.APP_STORE} alt="App Store" className="header__qr-download-img" />
                            </a>
                        </div>
                    </div>
                    {/* <!-- END HEADER QR CODE --> */}
                </li>
                <li className="header__navbar-item header__navbar-item--separate">
                    <a className="header__navbar-item header__navbar-icon-link" href="tel:0345751443">
                        <i className="header__navbar-icon fas fa-phone-alt"></i>
                        0345751443
                    </a>
                </li>
                <li className="header__navbar-item">
                    <a className="header__navbar-item header__navbar-icon-link" href="mailto:ngchai2410@gmail.com">
                        <i className="header__navbar-icon fas fa-envelope"></i>
                        ngchai2410@gmail.com
                    </a>
                </li>
            </ul>

            <ul className="header__navbar-list">
                <li className="header__navbar-item header__navbar-item--has-notify">
                    <a href="" className="header__navbar-item-link">
                        <i className="header__navbar-icon far fa-bell"></i>
                        Thông báo
                    </a>
                    {/* <!-- BEGIN NOTIFY --> */}
                    <div className="header__notify">
                        <header className="header__notify-header">
                            <h3>Thông báo mới nhận</h3>
                        </header>
                        <ul className="header__notify-list">
                            <li className="header__notify-item header__notify-item--viewed">
                                <a href="" className="header__notify-link">
                                    <img src={Images.LOGO} alt="notify" className="header__notify-img" />
                                    <div className="header__notify-info">
                                        <span className="header__notify-name">Trà sữa nhà làm ngon như nhà làm bla bla...</span>
                                        <span className="header__notify-description">Giá chỉ còn 75.000 (giá gốc 125.000 vnd)</span>
                                    </div>
                                </a>
                            </li>

                            <li className="header__notify-item header__notify-item--viewed">
                                <a href="" className="header__notify-link">
                                    <img src={Images.LOGO} alt="notify" className="header__notify-img" />
                                    <div className="header__notify-info">
                                        <span className="header__notify-name">Trà sữa nhà làm ngon như nhà làm bla bla...</span>
                                        <span className="header__notify-description">Giá chỉ còn 75.000 (giá gốc 125.000 vnd)</span>
                                    </div>
                                </a>
                            </li>

                            <li className="header__notify-item">
                                <a href="" className="header__notify-link">
                                    <img src={Images.LOGO} alt="notify" className="header__notify-img" />
                                    <div className="header__notify-info">
                                        <span className="header__notify-name">Trà sữa nhà làm ngon như nhà làm bla bla...</span>
                                        <span className="header__notify-description">Giá chỉ còn 75.000 (giá gốc 125.000 vnd)</span>
                                    </div>
                                </a>
                            </li>
                        </ul>

                        <footer className="header__notify-footer">
                            <a href="" className="header__notify-footer-btn">Xem tất cả</a>
                        </footer>
                    </div>
                    {/* <!-- END NOTIFY --> */}
                </li>
                <li className="header__navbar-item">
                    <a href="" className="header__navbar-item-link">
                        <i className="header__navbar-icon far fa-question-circle"></i>
                        Trợ giúp
                    </a>
                </li>
                {userName.UserName === null ?
                    <>
                        <Link to="/register"
                            className="header__navbar-item header__navbar-item--strong header__navbar-item--separate"
                            onClick={() => { onEnableFormRegister() }}
                        >Đăng ký</Link>
                        <Link to="/login"
                            onClick={() => { onEnableFormLogin() }}
                            className="header__navbar-item header__navbar-item--strong"

                        >Đăng nhập</Link>
                    </> :
                    <li className="header__navbar-item header__navbar-user">
                        {/* <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="header__navbar-uer-img" /> */}
                        <span className="header__navbar-uer-name">{userName.UserName}</span>

                        <ul className="header__navbar-user-menu">
                            {/* <li className="header__navbar-user-item">
                                <a href="">Tài khoản của tôi</a>
                            </li>
                            <li className="header__navbar-user-item">
                                <a href="">Địa chỉ của tôi</a>
                            </li> */}
                            <li className="header__navbar-user-item">
                                <Link to="/cart">Đơn mua</Link>
                            </li>
                            <li className="header__navbar-user-item header__navbar-user-item--sparate">
                                <Link to='/login' onClick={onLogout}>Đăng xuất</Link>
                            </li>
                        </ul>
                    </li>
                }
            </ul>
        </nav>
    );
}

export default HeaderNavbar;