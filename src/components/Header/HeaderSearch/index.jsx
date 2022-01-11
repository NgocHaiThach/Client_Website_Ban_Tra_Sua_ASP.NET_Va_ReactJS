import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Images from '../../../constant/images';
import { userName } from '../../../utils/getToken';
import './style.css'

HeaderSearch.propTypes = {};

function HeaderSearch(props) {

    const { handleSearch } = props;
    const typingTimoutRef = useRef(null)

    const [displayMobile, setDisplayMobile] = useState(false);
    const displayMenuMobile = () => {
        setDisplayMobile(!displayMobile)
    }

    const [search, setSearch] = useState()
    // const onSearch = (input) => {
    //     if (input) {
    //         handelSearch(input)
    //     }
    // }
    const onSearch = (e) => {
        const input = e.target.value
        setSearch(input)

        if (typingTimoutRef.current) {
            clearTimeout(typingTimoutRef.current)
        }

        typingTimoutRef.current = setTimeout(() => {
            const formvalues = {
                search: input,
            }
            if (handleSearch) {
                handleSearch(formvalues)
            }
        }, 300)

    }
    return (
        <>
            <div className="header__mobile-icon">
                <label htmlFor="mobile-menu-checkbox" className="header__mobile-navbar">
                    <i className="header__mobile-navbar-icon fas fa-bars"></i>
                </label>
                <label htmlFor="mobile-search-checkbox" className="header__mobile-search">
                    <i className="header__mobile-search-icon fas fa-search"></i>
                </label>
            </div>
            <i onClick={displayMenuMobile} className="header__mobile-navbar-icon fas fa-bars hide-on-laptop display-on-tablet-mobile" />
            <div className="header__logo hide-on-tablet ">
                <Link to="/" className="header__logo-link ">
                    <img className="header__logo-link-img logo__img-mobile" src={Images.LOGO} />
                </Link>
            </div>

            <input type="checkbox" hidden id="mobile-search-checkbox" className="header__search-checkbox" />
            <input type="checkbox" hidden id="mobile-menu-checkbox" className="header__menu-checkbox" />

            <ul className="header__mobile-navbar-menu" style={displayMobile ? { display: "block" } : { display: "none" }}>
                {userName === undefined ?
                    <>
                        <li className="header__mobile-navbar-menu-item">
                            <Link onClick={displayMenuMobile} to="/login" className="header__mobile-navbar-menu-link">Đăng Nhập</Link>
                        </li>
                        <li className="header__mobile-navbar-menu-item">
                            <Link onClick={displayMenuMobile} to="/register" className="header__mobile-navbar-menu-link">Đăng Ký</Link>
                        </li>
                    </> :
                    <li className="header__mobile-navbar-menu-item">
                        <Link to="/logout" className="header__mobile-navbar-menu-link">Đăng Xuất</Link>
                    </li>}
            </ul>

            <div className="header__search">
                <div className="header__search-input-wrap">
                    <input type="text"
                        className="header__search-input"
                        placeholder="Tìm kiếm sản phẩm"
                        value={search}
                        onChange={onSearch}
                    />
                </div>

                <button className="header__search-btn"
                // onClick={() => onSearch(search)}
                >
                    <i className="header__search-btn-icon fas fa-search"></i>
                </button>
            </div>
        </>
    );
}

export default HeaderSearch;