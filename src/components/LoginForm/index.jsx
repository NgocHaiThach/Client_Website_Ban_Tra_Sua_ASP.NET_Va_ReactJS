import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import './style.css';

LoginForm.propTypes = {};

const schema = yup.object().shape({
    username: yup.string().required().email(),
    password: yup.string().required().min(5),
}).required();

function LoginForm(props) {
    const { handleOnSubmit } = props
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data, e) => {
        e.preventDefault();
        if (handleOnSubmit) handleOnSubmit(data)
    }

    return (
        <div className="auth-form">
            <form onSubmit={handleSubmit(onSubmit)} className="auth-form__container">
                <div className="auth-form__header">
                    <h3 className="auth-form__heading">Đăng Nhập</h3>
                    <span id="auth-form__header-btn-register" className="auth-form__switch-btn">Đăng Ký</span>
                </div>
                <div className="auth-form__form">
                    <p className="auth-form__group">
                        <input
                            name="username"
                            {...register("username")}
                            type="text"
                            placeholder="Email của bạn"
                            className="auth-form__iput"

                        />
                    </p>
                    {errors?.username?.type === "required" && <p className="valid-form__message">Vui lòng nhập email</p>}
                    {errors?.username?.type === "email" && <p className="valid-form__message">Vui lòng nhập đúng email</p>}
                    <p className="auth-form__group">
                        <input
                            name="password"
                            {...register("password")}
                            type="password" placeholder="Mật khẩu của bạn"
                            className="auth-form__iput" />
                    </p>
                    {errors?.password?.type === "required" && <p className="valid-form__message">Vui lòng nhập mật khẩu</p>}
                    {errors?.password?.type === "min" && <p className="valid-form__message">Mật khẩu phải dài hơn 5 ký tự!</p>}
                </div>
                <div className="auth-form__aside">
                    <div className="auth-form__help">
                        <a href="" className="auth-form__help-link auth-form__help--forgot">
                            Quên mật khẩu
                        </a>
                        <span className="auth-form__help-sparate"></span>
                        <a href="" className="auth-form__help-link">
                            Cần trợ giúp?
                        </a>
                    </div>
                </div>
                <div className="auth-form__controls">
                    <button id="auth-form__login-back" className="btn auth-form__controls-back btn--normal">TRỞ
                        LẠI</button>
                    <button type="submit" className="btn btn--primary" >LOGIN</button>
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
    );

}

export default LoginForm;