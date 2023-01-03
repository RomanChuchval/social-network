import React from 'react';
import style from './Header.module.css'
import logo from '../../assets/network_logo.png'

export const Header = () => {
    return (
        <div className={style.header_wrapper}>
            <img className={style.header_logo} src={logo} alt=""/>
            <p className={style.header_title}>React Social Network</p>
            <button className={style.LogIn_btn}>Log Out</button>
        </div>
    );
};

