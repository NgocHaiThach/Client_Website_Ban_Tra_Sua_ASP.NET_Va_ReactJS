import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../../components/Container/Product/components/ProductList';
import { FormatInput } from '../../utils/FormatInput';
import { clearInput } from '../../redux/searchSlice'
import RequestApi from '../../utils/RequestApi';

ProductContainer.propTypes = {};

function ProductContainer(props) {

    const input = useSelector(state => state.search)
    const [productList, setProductList] = useState([])
    const [listToSearch, setListToSearch] = useState([])


    const getProductList = async () => {
        const res = await RequestApi('api/products', 'GET')
        setProductList(res.data)
    }

    //get api lưu vào ListToSearch để cho việc filter 
    const getToSearch = async () => {
        const res = await RequestApi('api/products', 'GET')
        setListToSearch(res.data)
    }

    useEffect(() => {
        getToSearch()
    }, [input])

    useEffect(() => {
        getProductList()
    }, [])

    //xu ly search product


    // const val = FormatInput(input.search)
    const filter = listToSearch.filter((item) => {
        const name = FormatInput(item.productName)
        if (name.includes(input.search)) {
            return item
        }
    })


    let tempList = productList
    if (input !== '') {
        tempList = filter
    }

    return (
        <div>
            <ProductList
                productList={tempList}
            />
        </div>
    );
}

export default ProductContainer;