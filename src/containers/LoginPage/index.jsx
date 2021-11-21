import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { login, logout } from '../../redux/userSlice';
import RequestApi from '../../utils/RequestApi';
import cookies from 'react-cookies';
import { useHistory } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import { getCarts } from '../../redux/apiCall';

LoginPage.propTypes = {
};

function LoginPage(props) {
    const history = useHistory()
    const dispath = useDispatch()
    const loginFaild = false
    const handleOnSubmit = async (data) => {

        try {
            await RequestApi('api/token', 'POST', {
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
                        loginFaild = true
                    }
                })
                .catch(err => { console.log("aaaaa", { err }) })
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