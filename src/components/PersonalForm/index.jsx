import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import './style.css';


const schema = yup.object().shape({
    userName: yup.string().required().max(50),
    fullName: yup.string().required().max(50),
    email: yup.string().required().email(),
}).required();

function PersonalForm(props) {
    const { info, handleUpdateInfo } = props;

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    //xử lý giới tính
    const genders = [
        {
            id: true,
            name: 'Nam'
        },
        {
            id: false,
            name: 'Nữ'
        }
    ]
    const [gender, setGender] = useState(info.gender)


    //xử lý cập nhật
    const [value, setValue] = useState(
        {
            userName: info.userName,
            fullName: info.fullName,
            email: info.email,
            gender: info.gender,
        }
    )

    const onSubmit = (data) => {
        if (handleUpdateInfo) handleUpdateInfo(data, gender)
    }

    return (
        <div className="grid wide">
            <div className="">
                <div className="payment__title">
                    Tài Khoản
                </div>
                <div className="payment__wrapper">
                    <div className="payment__border">
                        <div className="payment__address">
                            <div className="payment__address-title">
                                thông tin tài khoản
                            </div>
                            <div className="payment__address-name">
                                <div className="payment__address-phone">
                                    <label className="payment__address-name__label">
                                        Tài khoản *
                                    </label>
                                    <br />
                                    <input
                                        value={value.userName}
                                        name="userName"
                                        className="payment__address-name__input"
                                        type="text"
                                        placeholder="Tài khoản"
                                        {...register("userName")}
                                        onChange={(e) => setValue(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="payment__address-phone-and-mail">
                                <div className="payment__address-phone">
                                    <label className="payment__address-phone__label">
                                        Tên tài khoản *
                                    </label>
                                    <br />
                                    <input
                                        value={value.fullName}
                                        name="fullName"
                                        className="payment__address-phone__input"
                                        type="text"
                                        placeholder=" Tên tài khoản"
                                        {...register("fullName")}
                                        onChange={(e) => setValue(e.target.value)}

                                    />
                                </div>
                            </div>
                            <div className="validate__left-and-right">
                                {errors?.fullName?.type === "required" && <p className="valid-form__message validate__right">* Vui lòng nhập tên</p>}
                                {errors?.fullName?.type === "max" && <p className="valid-form__message validate__right">* Tên dài tối đa 50 ký tự</p>}
                            </div>

                            <div className="payment__address-province-and-district">
                                <div className="payment__address-province">
                                    <label className="payment__address-province__label">
                                        Email *
                                    </label>
                                    <br />
                                    <input
                                        value={value.email}
                                        name="email"
                                        className="payment__address-province__input"
                                        type="text"
                                        placeholder="Email"
                                        {...register("email")}
                                        onChange={(e) => setValue(e.target.value)}

                                    />
                                </div>

                            </div>
                            <div className="validate__left-and-right">
                                {errors?.email?.type === "required" && <p className="valid-form__message validate__left">* Vui lòng nhập email</p>}
                                {errors?.email?.type === "email" && <p className="valid-form__message validate__right">* Vui lòng đúng email</p>}
                            </div>

                            <div className="payment__address-ward-and-home">
                                {genders.map((item, index) => (
                                    <div key={index} className="payment__address-ward">
                                        <label className="payment__address-ward__label">
                                            {item.name} *
                                        </label>
                                        <br />
                                        <input
                                            name="ward"
                                            className="payment__address-ward__input"
                                            type="radio"
                                            onChange={() => setGender(item.id)}
                                            checked={gender === item.id}
                                        />
                                    </div>
                                ))}
                            </div>

                            <button
                                className="save btn btn-default"
                                onClick={handleSubmit(onSubmit)}
                            >
                                Lưu lại
                            </button>
                        </div>

                    </div>
                </div>
            </div >
        </div>

    );
}

export default PersonalForm;