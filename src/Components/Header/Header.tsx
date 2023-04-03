import React from 'react';
import style from './Header.module.css'
import logo from '../../assets/network_logo.png'
import {MapDispatchToProps, MapStateToPropsType} from "./HeaderContainer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutUserTC} from "../../Redux/auth-reducer";


type HeaderPropsType = MapStateToPropsType & MapDispatchToProps
export const Header: React.FC<HeaderPropsType> = (
    {
        authState
    }
) => {

    const dispatch = useDispatch()
    const onLogoutHandler = () => {
        dispatch(logoutUserTC())
    }

    const displayAuthInfo = authState.isAuth
        ? <>
            <p>e-mail: {authState.email}</p>
            <p>login: {authState.login}</p>
            <p>userId: {authState.id}</p>
        </>
        : <p>You are not authorized</p>


    return (
        <div className={style.header_wrapper}>
            <img className={style.header_logo} src={logo} alt=""/>
            <p className={style.header_title}>React Social Network</p>
            <div>
                {displayAuthInfo}
            </div>
            <NavLink to={'/login'}>
                <button onClick={onLogoutHandler}  className={style.LogIn_btn}>{authState.isAuth ? `Log out` : `Log in`}</button>
            </NavLink>

        </div>
    );
};

