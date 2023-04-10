import React from 'react';
import style from './Navbar.module.css'
import {NavbarFriends} from "./NavbarFriends";
import {NavbarLinks} from "./NavbarLinks";
import {NavbarPropsType} from "./NavbarContainer";


export const Navbar = (props: NavbarPropsType) => {

    let navbarFriendsList = props.navbarState.map(el =>
        <NavbarFriends key={el.id}
                       id={el.id}
                       name={el.name}
                       avatar={el.avatar}
                       status={el.status}
        />)

    return (
        <div className={style.navbar_wrapper}>
            <NavbarLinks/>
            <div className={style.navbar_friends_block}>
                {navbarFriendsList}
            </div>
        </div>
    );
};

