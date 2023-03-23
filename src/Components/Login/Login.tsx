import React from 'react';
import s from './Login.module.css'

export const Login = () => {
    return (
        <div className={s.login_page_wrapper}>
            <h3>Sign in</h3>
            <input className={s.input} placeholder={'login'} type="text"/>
            <input className={s.input} placeholder={'password'} type="password"/>
        </div>

    );
};

