import React from 'react';
import PropTypes from 'prop-types';
import RegistForm from '../../components/RegistForm';
import callApi from '../../utils/RequestApi';
import { useHistory } from "react-router-dom";

RegistPage.propTypes = {};

function RegistPage(props) {
    const history = useHistory

    const handleOnSubmit = (data) => {
        callApi('register', 'POST', {
            username: data.username,
            password: data.password,
        })
            .then(res => {
                if (res.status === 201) {
                    history.push('/login');
                }
                // else {
                //     console.log('dang ky that bai')
                // }
            })
    }
    return (
        <div>
            <RegistForm handleOnSubmit={handleOnSubmit} />
        </div>
    );
}

export default RegistPage;