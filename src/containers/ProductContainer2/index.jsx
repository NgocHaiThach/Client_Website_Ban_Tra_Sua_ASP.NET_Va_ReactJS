import React from 'react';
import { useSelector } from 'react-redux';
import ProductList2 from '../../components/ProductCategory2/ProductList2';

function ProductContainer2(props) {

    const productList2 = useSelector(state => state.products.products)
    let listCategory2 = []

    productList2.map((item, index) => {
        if (item.categoryId === 1) {
            listCategory2.push(item)
        }
    })


    return (
        <div>
            <ProductList2 listCategory2={listCategory2} />
        </div>
    );
}

export default ProductContainer2;