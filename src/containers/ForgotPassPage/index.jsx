import React from 'react';
import ForgotPass from '../../components/ForgotPass';
import requestApi from '../../utils/RequestApi';
import { ToastContainer } from 'react-toastify';

function ForgotPassPage(props) {

    const handleForgotPass = async (data) => {
        try {
            await requestApi(`api/users/password`, 'PUT', {

                userName: data.username,
                password: data.password,

            })
        }
        catch (err) {
            console.log(err)
        }
        //console.log(data, gender)
    }

    const style = {
        fontSize: 17
    }

    return (
        <div>
            <ForgotPass handleForgotPass={handleForgotPass} />
            <ToastContainer style={style} />
        </div>
    );
}

export default ForgotPassPage;