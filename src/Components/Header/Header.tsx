import React from 'react';
import style from './Header.module.css'
import logo from '../../assets/network_logo.png'
import {MapDispatchToProps, MapStateToPropsType} from "./HeaderContainer";
import {NavLink} from "react-router-dom";


type HeaderPropsType = MapStateToPropsType & MapDispatchToProps
export const Header: React.FC<HeaderPropsType> = (
    {
        authState
    }
) => {

    return (
        <div className={style.header_wrapper}>
            <img className={style.header_logo} src={logo} alt=""/>
            <p className={style.header_title}>React Social Network</p>
            <div>
                <p>Your e-mail: {authState.email}</p>
                <p>Your ID: {authState.id}</p>
                <p>Your login: {authState.login}</p>
            </div>
                <NavLink to={'/login'}>
                    <button className={style.LogIn_btn}>{authState.isAuth ? `Log out` : `Log in`}</button>
                </NavLink>

        </div>
    );
};

