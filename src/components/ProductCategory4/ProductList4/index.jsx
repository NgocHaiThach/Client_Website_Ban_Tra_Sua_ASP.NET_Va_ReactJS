import React from 'react';
import ProductCard4 from '../ProductCard4';

function ProductList4(props) {

    const { listCategory4 } = props;


    return (
        <div className="home-product">
            <div className="row sm-gutter">
                {listCategory4.map((pro, index) => (
                    <div key={index} className="col l-3 m-4 c-6">
                        <ProductCard4 product={pro} />
                    </div>
                ))}

            </div>
        </div>
    );

}

export default ProductList4;