import React from 'react';
import Bill from '../../components/Bill';


function BillPage(props) {


    const listCart = JSON.parse(localStorage.getItem('infoCart'))
    // const listCart = useSelector(state => state.carts.carts.dishCarts)

    return (
        <div>
            {listCart && <Bill listCart={listCart} />}
        </div>
    );
}

export default BillPage;