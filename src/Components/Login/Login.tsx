import React from 'react';
import s from './Login.module.css'
import {useForm, SubmitHandler} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";
import {loginUserTC} from "../../Redux/auth-reducer";


export const Login = () => {

    const isAuth = useSelector<AppStateType, boolean>(state => state.userAuth.isAuth)

    if (isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={s.login_page_wrapper}>
            <h3>Sign in</h3>
            <LoginForm/>
        </div>
    );
};


type InputsType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<InputsType>({
        mode: "onBlur"
    })
    const dispatch = useDispatch()

    const onSubmit: SubmitHandler<InputsType> = (loginData) => {
        dispatch(loginUserTC(loginData.email, loginData.password, loginData.rememberMe))
    }


    return (
        <form className={s.loginForm_wrapper} onSubmit={handleSubmit(onSubmit)}>
            <label> Login name <input className={s.input}
                                      {...register('email', {required: 'email field is required'})}
                                      placeholder={'login'}
                                      type="text"/>
            </label>
            {errors.email && <span className={s.validation_error}>{errors?.email?.message
                ? errors.email.message : 'error!'
            }</span>}
            <label>Password <input className={s.input}
                                   {...register('password', {required: 'password field is required'})}
                                   placeholder={'password'}
                                   type="password"/>
            </label>
            {errors.password && <span className={s.validation_error}>{errors?.password?.message
                ? errors.password.message : 'error!'
            }</span>}
            <label>Remember me <input type="checkbox" {...register('rememberMe')}/></label>
            <button className={s.submit_btn} type={"submit"} disabled={!isValid}>Submit</button>
        </form>
    )
}


