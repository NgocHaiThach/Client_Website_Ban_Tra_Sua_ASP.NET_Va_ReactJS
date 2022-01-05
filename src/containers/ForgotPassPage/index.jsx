import React from 'react';
import ForgotPass from '../../components/ForgotPass';
import requestApi from '../../utils/RequestApi';

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

    return (
        <div>
            <ForgotPass handleForgotPass={handleForgotPass} />
        </div>
    );
}

export default ForgotPassPage;