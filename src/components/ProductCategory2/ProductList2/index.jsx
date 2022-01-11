import React from 'react';
import ProductCard2 from '../ProductCard2';

function ProductList2(props) {
    const { listCategory2 } = props;

    return (
        <div className="home-product">
            <div className="row sm-gutter">
                {listCategory2.map((pro, index) => (
                    <div key={index} className="col l-3 m-4 c-6">
                        <ProductCard2 product={pro} />
                    </div>
                ))}

            </div>
        </div>
    );
}

export default ProductList2;