import React from 'react';
import { useSelector } from 'react-redux';
import ProdcutList3 from '../../components/ProductCategory3/ProductList3';

function ProductContainer3(props) {

    const productList3 = useSelector(state => state.products.products)
    let listCategory3 = []

    productList3.map((item) => {
        if (item.categoryId === 2) {
            listCategory3.push(item)
        }
    })

    return (
        <div>
            <ProdcutList3 listCategory3={listCategory3} />
        </div>
    );
}

export default ProductContainer3;