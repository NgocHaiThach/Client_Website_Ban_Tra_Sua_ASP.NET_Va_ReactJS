import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../../components/Container/Product/components/ProductList';
import { FormatInput } from '../../utils/FormatInput';
import { clearInput } from '../../redux/searchSlice'
import requestApi from '../../utils/RequestApi';

ProductContainer.propTypes = {};

function ProductContainer(props) {

    const dispatch = useDispatch()
    const [list, setList] = useState()
    const input = useSelector(state => state.search)
    let productList = useSelector(state => state.products.products)
    const listToSearch = useSelector(state => state.products.products)

    //xu ly search product
    const handleSearch = () => {

        const val = FormatInput(input)
        const filter = listToSearch.filter((item) => {
            const name = FormatInput(item.productName)
            if (name.includes(val)) {
                return item
            }
        })
        productList = filter
    }

    handleSearch()
    //get api lưu vào productList để cho việc hiển thị  
    // const getProductList = async () => {
    //     const res = await requestApi('api/products/full', 'GET')
    //     setList(res.data)
    // }

    // useEffect(() => {
    //     getProductList()
    // }, [])

    // if (input === '') {
    //     productList = list
    // }


    return (
        <div>
            <ProductList
                productList={productList}
            />
        </div>
    );
}

export default ProductContainer;