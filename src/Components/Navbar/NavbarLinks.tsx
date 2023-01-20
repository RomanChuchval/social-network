import React from 'react';
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export const NavbarLinks = () => {
    return (
        <>
            <div className={style.navbar_item}>
                <NavLink activeClassName={style.activeLink} to="/profile">Profile</NavLink>
            </div>
            <div className={style.navbar_item}>
                <NavLink activeClassName={style.activeLink} to="/dialogs">Dialogs</NavLink>
            </div>
            <div className={style.navbar_item}>
                <NavLink activeClassName={style.activeLink} to="/news_feed">News Feed</NavLink>
            </div>
            <div className={style.navbar_item}>
                <NavLink activeClassName={style.activeLink} to="/music">Music</NavLink>
            </div>
            <div className={style.navbar_item}>
                <NavLink activeClassName={style.activeLink} to="/settings">Settings</NavLink>
            </div>
        </>
    );
};

