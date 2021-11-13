import React from 'react';
import FilterContainer from '../../containers/FilterContainer';
import ProductContainer from '../../containers/ProductContainer';
import SliderContainer from '../../containers/SliderContainer';
import Category from './Category';
import Filter from './Filter';
import Pagination from './Pagination';
import Propose from './Propose';

import './style.css'

Container.propTypes = {};

function Container(props) {


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
                            <div className="product-propose_title-name active">BÁN CHẠY NHẤT</div>
                        </div>
                        <ProductContainer />
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;