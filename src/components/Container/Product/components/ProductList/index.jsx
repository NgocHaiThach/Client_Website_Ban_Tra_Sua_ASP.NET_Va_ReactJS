import PropTypes from 'prop-types';
import React from 'react';
import { useRouteMatch } from 'react-router';
import ProductCard from '../ProductCard';
import './style.css';

ProductList.propTypes = {
    productList: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                idCategory: PropTypes.number.isRequired,
                name: PropTypes.string,
                image: PropTypes.string,
                price: PropTypes.string,
                description: PropTypes.string,
                inventory: PropTypes.number,
                rating: PropTypes.number,
            }),
            quantity: PropTypes.number,
        })),

};
ProductList.defaultProps = {
    productList: [],
}

function ProductList(props) {

    const { productList, onProductItemClick } = props

    return (
        <div className="home-product">
            <div className="row sm-gutter">
                {productList.map((pro, index) => (
                    <div key={index} className="col l-3 m-4 c-6">
                        <ProductCard product={pro} onItemClick={onProductItemClick} />
                    </div>
                ))}

            </div>
        </div>
    );
}

export default ProductList;