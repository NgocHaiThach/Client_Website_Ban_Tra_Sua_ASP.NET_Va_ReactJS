import React from 'react';
import { useSelector } from 'react-redux';
import ProductList4 from '../../components/ProductCategory4/ProductList4';

function ProductContainer4(props) {

    const productList4 = useSelector(state => state.products.products)
    let listCategory4 = []

    productList4.map((item, index) => {
        if (item.categoryId === 3) {
            listCategory4.push(item)
        }
    })

    return (
        <div>
            <ProductList4 listCategory4={listCategory4} />
        </div>
    );
}

export default ProductContainer4;