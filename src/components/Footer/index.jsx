import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../../constant/images';
import './style.css'

Footer.propTypes = {};

function Footer(props) {
    return (
        <footer className="footer">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link to="/" className="footer-item__link">Trung tâm trợ giúp</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="/" className="footer-item__link">NgocHai Mail</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="/" className="footer-item__link">Hướng dẫn mua hàng</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">Về tickid</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link to="/" className="footer-item__link">Giới thiệu</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="/" className="footer-item__link">Tuyển dụng</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="/" className="footer-item__link">Điều khoản</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">Danh mục</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link to="/" className="footer-item__link">Trà sữa</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="/" className="footer-item__link">Trà trái cây</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="/" className="footer-item__link">Macchiato</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">Theo dõi chúng tôi</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="https://www.facebook.com/haitac.ks/" className="footer-item__link">
                                    <i className="footer-item__icon fab fa-facebook"></i>
                                    Facebook
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.instagram.com/hai_xxiv/" className="footer-item__link">
                                    <i className="footer-item__icon fab fa-instagram"></i>
                                    Instagram
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="https://github.com/NgocHaiThach" className="footer-item__link">
                                    <i className="footer-item__icon fab fa-github"></i>
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-8 c-12">
                        <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                        <div className="footer__dowload">
                            <img src={Images.QR_CODE} alt="Download QR Coed" className="footer__download-qr" />
                            <div className="footer__download-apps">
                                <a href="" className="footer__download-apps-link">
                                    <img src={Images.APP_STORE} alt="App Store" className="footer__download-app-img" />
                                </a>
                                <a href="" className="footer__download-apps-link">
                                    <img src={Images.GG_PLAY} alt="Google Play" className="footer__download-app-img" />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="grid wide">
                    <p className="footer__copyright">© 2021 - Bản quyền thuộc về HaiThachNgoc</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;