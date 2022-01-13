import React from 'react';
import RegistForm from '../../components/RegistForm';
import requestApi from '../../utils/RequestApi';
import { ToastContainer } from 'react-toastify';

RegistPage.propTypes = {};

function RegistPage(props) {

    const handleOnSubmit = async (data) => {
        try {
            await requestApi(`api/users`, 'POST', {
                userName: data.username,
                password: data.password,
                fullName: data.fullname,
                email: data.email,
                gender: true,
            })
        }
        catch (err) {
            console.log(err);
        }
    }
    const style = {
        fontSize: 17
    }


    return (
        <div>
            <RegistForm handleOnSubmit={handleOnSubmit} />
            <ToastContainer style={style} />

        </div>
    );
}

export default RegistPage;