import React from 'react';
import PropTypes from 'prop-types';
import PaymentForm from '../../components/PaymentForm';
import { useSelector } from 'react-redux';

PaymentPage.propTypes = {

};

function PaymentPage(props) {

    const listCart = useSelector(state => state.carts.carts.dishCarts)
    return (
        <div>
            {listCart && <PaymentForm listCart={listCart} />}
        </div>
    );
}

export default PaymentPage;