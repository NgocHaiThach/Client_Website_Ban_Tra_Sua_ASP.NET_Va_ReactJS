import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

Filter.propTypes = {};

function Filter(props) {
    const { handleSort } = props;

    const onSort = (type) => {
        if (handleSort) handleSort(type)
    }
    return (
        <>
            <div className="home-filter hide-on-mobile-tablet">
                <span className="home-filter__lable">Lọc sản phẩm</span>
                <button className="home-filter__btn btn btn--primary">Tất Cả</button>
                <button className="home-filter__btn btn">Trà Sữa</button>
                <button className="home-filter__btn btn">Trà Nguyên Chất</button>
                <button className="home-filter__btn btn">Thức Uống Đá Xay</button>
                <button className="home-filter__btn btn">Topping</button>
                {/* <div className="select-input">
                    <span className="select-input__lable">Giá</span>
                    <i className="select-input__icon fas fa-angle-down"></i>
                    <ul className="select-input__list">
                        <li className="select-input__item">
                            <a onClick={() => { onSort('thap') }} className="select-input__link">Giá: Thấp đến Cao</a>
                        </li>
                        <li className="select-input__item">
                            <a onClick={() => { onSort('cao') }} className="select-input__link">Giá: Cao đến Thấp</a>
                        </li>
                    </ul>
                </div> */}

                <div className="home-filter__page">
                    <span className="home-filter__page-num">
                        <span className="home-filter__page-current">1</span>/14
                    </span>

                    <div className="home-filter__page-control">
                        <a href="" className="home-filter__page-btn home-filter__page-btn--disabled">
                            <i className="home-filter__page-icon fas fa-angle-left"></i>
                        </a>
                        <a href="" className="home-filter__page-btn">
                            <i className="home-filter__page-icon fas fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filter;