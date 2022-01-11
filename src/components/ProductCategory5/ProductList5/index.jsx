import React from 'react';
import ProductCard5 from '../ProductCard5';

function ProductList5(props) {

    const { listCategory5 } = props;
    return (
        <div className="home-product">
            <div className="row sm-gutter">
                {listCategory5.map((pro, index) => (
                    <div key={index} className="col l-3 m-4 c-6">
                        <ProductCard5 product={pro} />
                    </div>
                ))}

            </div>
        </div>
    );

}

export default ProductList5;