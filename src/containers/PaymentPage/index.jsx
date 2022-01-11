import React from 'react';
import { useSelector } from 'react-redux';
import requestApi from '../../utils/RequestApi';
import PaymentForm from '../../components/PaymentForm';
import { idUser, accessToken } from '../../utils/getToken';
import { getCarts } from '../../redux/apiCall';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';


function PaymentPage(props) {

    const dispatch = useDispatch()

    const style = {
        fontSize: 17
    }

    const handlePaymentOnline = async (data) => {
        try {
            //online
            await requestApi('api/orders/online', 'POST', {
                userId: idUser,
                receive: {
                    name: data.name,
                    phone: data.phone,
                    address: data.home,
                    ward: data.ward,
                    district: data.district,
                    region: data.province
                },
                shipPrice: 15000
            })
                .then(res => {
                    // console.log('res', res)
                    if (res.status === 200) {
                        window.location.href = `${res.data.orderurl}`;
                    }
                    else if (res.status === 400) {
                        console.log('thanh toan that bai')
                        // loginFaild = true
                    }
                })
                .catch(err => { console.log(err) })
            getCarts(dispatch, accessToken, idUser)
        }
        catch (err) {
            console.log(err);
        }

    }

    const handleOder = async (data) => {
        try {
            // offline
            await requestApi(`api/orders`, 'POST', {
                userId: idUser,
                receive: {
                    name: data.name,
                    phone: data.phone,
                    address: data.home,
                    ward: data.ward,
                    district: data.district,
                    region: 'Hồ Chí Minh'
                },
                shipPrice: 15000
            })
            getCarts(dispatch, accessToken, idUser)
        }
        catch (err) {
            console.log(err);
        }
    }

    const listCart = useSelector(state => state.carts.carts.dishCarts)
    return (
        <div>
            {listCart && <PaymentForm
                handlePaymentOnline={handlePaymentOnline}
                handleOder={handleOder}
                listCart={listCart}
            />}
            {
                listCart && <ToastContainer style={style} />
            }
        </div>
    );
}

export default PaymentPage;