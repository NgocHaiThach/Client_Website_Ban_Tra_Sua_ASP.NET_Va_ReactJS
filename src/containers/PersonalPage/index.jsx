import React, { useEffect, useState } from 'react';
import PersonalForm from '../../components/PersonalForm';
import { idUser, accessToken } from '../../utils/getToken';
import requestApi from '../../utils/RequestApi';

function PersonalPage(props) {

    //xử lấy thông tin tài khoản
    const [info, setInfo] = useState()
    const getInforPersonal = async () => {
        try {
            const res = await requestApi(`api/users/${idUser}`, 'GET')
            setInfo(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getInforPersonal()
    }, [])

    //xử lý cập nhật thông tin tài khoản
    const handleUpdateInfo = async (data, gender) => {
        try {
            await requestApi(`api/users/${idUser}`, 'PUT', {
                userId: idUser,
                userName: data.userName,
                fullName: data.fullName,
                email: data.email,
                gender: gender,
            }, accessToken)
        }
        catch (err) {
            console.log(err)
        }
        //console.log(data, gender)
    }

    return (
        <div>
            {info && <PersonalForm
                info={info}
                handleUpdateInfo={handleUpdateInfo}
            />}
        </div>
    );
}

export default PersonalPage;