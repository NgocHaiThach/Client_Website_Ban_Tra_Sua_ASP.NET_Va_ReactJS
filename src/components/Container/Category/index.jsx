import React from 'react';
import './style.css'

Category.propTypes = {};

function Category(props) {
    return (
        <div className="col l-2 m-0 c-0">
            <nav className="category">
                <h3 className="category__heading">
                    <i className="category__heading-icon fas fa-list"></i>
                    Danh Mục
                </h3>
                <ul className="category-list">
                    <li className="category-item category-item--active">
                        <a href="#" className="category-item__link">Trà sữa</a>
                    </li>
                    <li className="category-item">
                        <a href="#" className="category-item__link">Trà đào</a>
                    </li>
                    <li className="category-item">
                        <a href="#" className="category-item__link">Trà đá</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Category;