import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from 'yup';

RegistForm.propTypes = {};

const schema = yup.object().shape({
    username: yup.string().required().email(),
    password: yup.string().required().min(5),
    repeatPassword: yup.string().required().oneOf([yup.ref('password')]),
}).required();

function RegistForm(props) {

    const { handleOnSubmit } = props

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data, e) => {
        e.preventDefault();
        if (handleOnSubmit) handleOnSubmit(data)
        console.log(data)
    }

    return (
        <>
            {/* <!-- Authen Form --> */}
            <div id="auth-form-register" className="auth-form">
                <form onSubmit={handleSubmit(onSubmit)} className="auth-form__container">
                    <div className="auth-form__header">
                        <h3 className="auth-form__heading">Đăng Ký</h3>
                        <span id="auth-form__header-btn-login" className="auth-form__switch-btn">Đăng Nhập</span>
                    </div>

                    <div className="auth-form__form">
                        <div className="auth-form__group">
                            <input
                                name="username"
                                {...register("username")}
                                type="text"
                                placeholder="Email của bạn"
                                className="auth-form__iput" />
                        </div>
                        {errors?.username?.type === "required" && <p className="valid-form__message">Vui lòng nhập email</p>}
                        {errors?.username?.type === "email" && <p className="valid-form__message">Vui lòng nhập đúng email</p>}
                        <div className="auth-form__group">
                            <input
                                name="password"
                                {...register("password")}
                                type="password"
                                placeholder="Mật khẩu của bạn"
                                className="auth-form__iput" />
                        </div>
                        {errors?.password?.type === "required" && <p className="valid-form__message">Vui lòng nhập mật khẩu</p>}
                        {errors?.password?.type === "min" && <p className="valid-form__message">Mật khẩu phải dài hơn 5 ký tự!</p>}
                        <div className="auth-form__group">
                            <input
                                name="repeatPassword"
                                {...register("repeatPassword")}
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                                className="auth-form__iput" />
                        </div>
                        {errors?.repeatPassword?.type === "required" && <p className="valid-form__message">Vui lòng nhập mật khẩu</p>}
                        {errors?.repeatPassword?.type === "oneOf" && <p className="valid-form__message">Mật khẩu không khớp!</p>}
                    </div>

                    <div className="auth-form__aside">
                        <p className="auth-form__policy-text">
                            Bằng việc đăng kí, bạn đã đồng ý với TNH-shop về
                            <a href="" className="auth-form__text-link">Điều khoản dịch vụ</a>
                            <a href="" className="auth-form__text-link">Chính sách bảo mật</a>
                        </p>
                    </div>

                    <div className="auth-form__controls">
                        <button id="auth-form__register-back" className="btn auth-form__controls-back btn--normal">TRỞ
                            LẠI</button>
                        <button
                            type="submit"
                            id="auth-form__controls-register"
                            className="btn btn--primary">ĐĂNG KÝ
                        </button>
                    </div>
                </form>

                <div className="auth-form__socials">
                    <a href="" className="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                        <i className="auth-form__socials-icon fab fa-facebook-square"></i>
                        <span className="auth-form__socials-title">
                            Kết nối với Facebook
                        </span>
                    </a>
                    <a href="" className="auth-form__socials--google btn btn--size-s btn--with-icon">
                        <i className="auth-form__socials-icon fab fa-google"></i>
                        <span className="auth-form__socials-title">
                            Kết nối với Google
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default RegistForm;