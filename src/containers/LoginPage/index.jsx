import jwt_decode from 'jwt-decode';
import React, { useState } from 'react';
import cookies from 'react-cookies';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import LoginForm from '../../components/LoginForm';
import { getCarts } from '../../redux/apiCall';
import { login } from '../../redux/userSlice';
import RequestApi from '../../utils/RequestApi';

LoginPage.propTypes = {
};

function LoginPage(props) {
    const history = useHistory()
    const dispath = useDispatch()
    const [status, setStatus] = useState('abc')
    const loginFaild = false
    const handleOnSubmit = async (data) => {

        try {
            await RequestApi('api/users/login', 'POST', {
                username: data.username,
                password: data.password,
            })
                .then(res => {
                    // console.log('res', res)
                    if (res.status === 200) {

                        cookies.save('user', res.data.token)
                        const action = login(jwt_decode(res.data.token).UserName)
                        dispath(action)
                        getCarts(dispath, res.data.token, jwt_decode(res.data.token).UserId)
                    }
                    else if (res.status === 400) {
                        console.log('dang nhap that bai')
                        // loginFaild = true
                    }
                })
                .catch(err => {
                    console.log(err)
                    setStatus('hai123462734567')
                    console.log('loginFail', status)
                })
            if (loginFaild === false) {
                history.push('/home/all')
            }
        }
        catch (err) {
            alert(err.response)
        }
    }

    return (
        <div>
            <LoginForm handleOnSubmit={handleOnSubmit} loginFaild={loginFaild} />
        </div>
    );
}

export default LoginPage;