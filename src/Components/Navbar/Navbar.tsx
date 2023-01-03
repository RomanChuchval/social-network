import React from 'react';
import style from './Navbar.module.css'


export const Navbar = () => {
    return (
        <div className={style.navbar_wrapper}>
            <div className={style.navbar_item}>
                Profile
            </div>
            <div className={style.navbar_item}>
                Dialogs
            </div>
            <div className={style.navbar_item}>
                News Feed
            </div>
            <div className={style.navbar_item}>
                Music
            </div>
            <div className={style.navbar_item}>
                Settings
            </div>
        </div>
    );
};

