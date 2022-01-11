import React from 'react';
import ProductCard3 from '../ProductCard3';

function ProdcutList3(props) {

    const { listCategory3 } = props;

    return (
        <div className="home-product">
            <div className="row sm-gutter">
                {listCategory3.map((pro, index) => (
                    <div key={index} className="col l-3 m-4 c-6">
                        <ProductCard3 product={pro} />
                    </div>
                ))}

            </div>
        </div>
    );
}

export default ProdcutList3;