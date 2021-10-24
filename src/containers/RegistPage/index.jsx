import React from 'react';
import PropTypes from 'prop-types';
import RegistForm from '../../components/RegistForm';
import callApi from '../../utils/RequestApi';


RegistPage.propTypes = {};

function RegistPage(props) {

    const handleOnSubmit = (data) => {
        callApi('register', 'POST', {
            username: data.username,
            password: data.password,
        })
            .then(res => {
                if (res.status === 201) {
                    console.log('dang nhap thanh cong')
                }
                else {
                    console.log('dang ky that bai')
                }
            })
    }
    return (
        <div>
            <RegistForm handleOnSubmit={handleOnSubmit} />
        </div>
    );
}

export default RegistPage;