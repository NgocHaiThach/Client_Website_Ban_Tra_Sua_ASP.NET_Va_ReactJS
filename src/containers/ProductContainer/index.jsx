import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import ProductList from '../../components/Container/Product/components/ProductList';
import { toSlug } from '../../utils/ToSlug';
import cookies from 'react-cookies';
import jwt_decode from 'jwt-decode';

ProductContainer.propTypes = {};

function ProductContainer(props) {

    const history = useHistory()
    const productList = useSelector(state => state.products.products)

    console.log('sp', productList)
    const handleProductItemClick = (product) => {
        const slug = toSlug(product.productName)
        const detailProductUrl = `/product/${slug}`
        history.push(detailProductUrl)
    }

    return (
        <div>
            <ProductList productList={productList} onProductItemClick={handleProductItemClick} />
        </div>
    );
}

export default ProductContainer;