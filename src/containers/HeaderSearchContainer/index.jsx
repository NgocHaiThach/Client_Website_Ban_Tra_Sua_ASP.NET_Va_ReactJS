import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderSearch from '../../components/Header/HeaderSearch';
import { toInput } from '../../redux/searchSlice';

function HeaderSearchContainer(props) {

    const dispatch = useDispatch()
    const search = useSelector(state => state.search)

    const handelSearch = (input) => {
        const action = toInput(input)
        dispatch(action)
    }

    return (
        <>
            <HeaderSearch
                handelSearch={handelSearch}
            />
        </>
    );
}

export default HeaderSearchContainer;