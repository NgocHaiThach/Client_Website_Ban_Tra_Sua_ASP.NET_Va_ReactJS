import React from 'react';
import { useSelector } from 'react-redux';
import ProductList5 from '../../components/ProductCategory5/ProductList5';


function ProductContainer5(props) {

    const productList5 = useSelector(state => state.products.products)
    let listCategory5 = []

    productList5.map((item, index) => {
        if (item.categoryId === 4) {
            listCategory5.push(item)
        }
    })

    return (
        <div>
            <ProductList5 listCategory5={listCategory5} />
        </div>
    );
}

export default ProductContainer5;