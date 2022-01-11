import React from 'react';
import { useSelector } from 'react-redux';
import ProductContainer from '../../containers/ProductContainer';
import ProductContainer2 from '../../containers/ProductContainer2';
import ProductContainer3 from '../../containers/ProductContainer3';
import ProductContainer4 from '../../containers/ProductContainer4';
import ProductContainer5 from '../../containers/ProductContainer5';
import SliderContainer from '../../containers/SliderContainer';
import './style.css';


Container.propTypes = {};

function Container(props) {

    const input = useSelector(state => state.search)


    return (
        <div className="app__container">
            <div className="grid wide">
                <div className="row sm-gutter app__content">
                    {/* <Category /> */}
                    <div className="col l-12 m-12 c-12">
                        <SliderContainer />
                        {/* <FilterContainer /> */}
                        {/* <Propose /> */}
                        <div className="product-propose_title">
                            <div className="product-propose_title-name active">TẤT CẢ SẢN PHẨM</div>
                        </div>
                        <ProductContainer />
                        {/* <Pagination /> */}

                        <div className="product-propose_title">
                            <div className="product-propose_title-name active">TRÀ SỮA</div>
                        </div>
                        <ProductContainer2 />
                        <div className="product-propose_title">
                            <div className="product-propose_title-name active">TRÀ TRÁI CÂY</div>
                        </div>
                        <ProductContainer3 />
                        <div className="product-propose_title">
                            <div className="product-propose_title-name active">MACCHIATO</div>
                        </div>
                        <ProductContainer4 />
                        <ProductContainer5 />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;