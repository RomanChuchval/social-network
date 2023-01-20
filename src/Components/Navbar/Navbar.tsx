import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {NavbarFriendsList} from "./NavbarFriendsList";
import {NavbarLinks} from "./NavbarLinks";
import {NavbarType} from "../../Redux/state";

type NavbarPropsType = {
    navbarState : NavbarType[]
}

export const Navbar = (props: NavbarPropsType) => {

    let navbarFriendsList = props.navbarState.map(el => <NavbarFriendsList key={el.id} id={el.id} name={el.name} />)

    return (
        <div className={style.navbar_wrapper}>
            <NavbarLinks/>
            {navbarFriendsList}
        </div>
    );
};

