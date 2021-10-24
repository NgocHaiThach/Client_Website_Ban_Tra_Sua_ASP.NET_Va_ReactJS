import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/Container/Filter';


FilterContainer.propTypes = {};

function FilterContainer(props) {
    //let [productList, setProductList] = useState([])
    const dispatch = useDispatch()

    // useEffect(async () => {
    //     await axios.get('http://localhost:3000/products')
    //         .then(res => dispatch(setProduct(res.data)))

    // }, [])

    //const list = useSelector(state => state.products.product)
    // console.log('list1', list)


    return (
        <>
            <Filter />
        </>
    );
}

export default FilterContainer;