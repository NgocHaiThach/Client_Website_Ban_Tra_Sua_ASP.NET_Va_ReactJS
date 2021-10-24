import React from 'react';
import FilterContainer from '../../containers/FilterContainer';
import ProductContainer from '../../containers/ProductContainer';
import Category from './Category';
import Filter from './Filter';
import Pagination from './Pagination';
import './style.css'

Container.propTypes = {};

function Container(props) {


    return (
        <div className="app__container">
            <div className="grid wide">
                <div className="row sm-gutter app__content">
                    {/* <Category /> */}
                    <div className="col l-12 m-12 c-12">
                        <FilterContainer />
                        <ProductContainer />
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;