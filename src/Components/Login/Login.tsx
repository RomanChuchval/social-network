import React from 'react';
import s from './Login.module.css'
import {useForm, SubmitHandler} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";
import {loginUserTC} from "../../Redux/auth-reducer";


export const Login = () => {
    console.log('rerender')
    const isAuth = useSelector<AppStateType, boolean>(state => state.userAuth.isAuth)
    if(isAuth) return <Redirect to={'/profile'}/>
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
    const {register, handleSubmit, watch, formState: {errors}} = useForm<InputsType>()
    const dispatch = useDispatch()

    const onSubmit: SubmitHandler<InputsType> = (loginData) => {
        dispatch(loginUserTC(loginData.email, loginData.password, loginData.rememberMe))
    }

    return (
        <div>
            <form className={s.loginForm_wrapper} onSubmit={handleSubmit(onSubmit)}>
                <label> Login name <input className={s.input}
                                          {...register('email', {required: true})}
                                          placeholder={'login'}
                                          type="text"/>
                </label>
                <span>{watch("email")}</span>
                {errors.email && <span>Name is required</span>}
                <label>Password <input className={s.input}
                                       {...register('password', {required: true})}
                                       placeholder={'password'}
                                       type="password"/>
                </label>
                <span>{watch("password")}</span>
                {errors.password && <span>Password is required</span>}
                <label>Remember me <input type="checkbox" {...register('rememberMe')}/></label>
                <button className={s.submit_btn} type={"submit"}>Submit</button>
            </form>
        </div>
    )
}


