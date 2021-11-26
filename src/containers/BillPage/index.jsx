import React from 'react';
import Bill from '../../components/Bill';
import { useSelector } from 'react-redux';


function BillPage(props) {

    const listCart = useSelector(state => state.carts.carts.dishCarts)

    return (
        <div>
            {listCart && <Bill listCart={listCart} />}
        </div>
    );
}

export default BillPage;