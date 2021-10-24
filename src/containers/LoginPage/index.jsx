import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { addUser } from '../../redux/userSlice';
import callApi from '../../utils/RequestApi';
import cookies from 'react-cookie'

LoginPage.propTypes = {
};

function LoginPage(props) {
    const dispath = useDispatch()
    const handleOnSubmit = (data) => {

        callApi('login', 'POST', {
            username: data.username,
            password: data.password,
        })
            .then(res => {
                if (res.status === 201) {
                    //localStorage.setItem('access_token', res.body.access_token);
                    console.log('dang nhap thanh cong')
                    // cookies.save('access_token', res.body.access_token)

                }
                else {
                    console.log('dawng nhap that bai')
                }
                // console.log('trang thai', res.status)
            })
        //const action = addUser(data)
        //dispath(action)
        // cookies.save('user', user.data)
        console.log('data2', data)
        localStorage.setItem('user', data)
    }

    const a = callApi('http://trungdung.somee.com/menu', 'GET')
    console.log('api dung', a)

    return (
        <div>
            <LoginForm handleOnSubmit={handleOnSubmit} />
        </div>
    );
}

export default LoginPage;