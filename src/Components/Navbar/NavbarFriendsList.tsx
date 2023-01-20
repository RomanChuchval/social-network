import React from 'react';
import style from './Navbar.module.css'

type NavbarFriendsType = {
    id: string
    name: string
    avatar: string
    status: string
}

export const NavbarFriendsList = (props: NavbarFriendsType) => {
    return (
        <div className={style.navbar_friend_item}>
                <img className={style.navbar_friend_avatar} src={props.avatar} alt="avatar"/>
            <div className={style.navbar_friend_name}>
                {props.name}
            </div>
            <div className={props.status === 'online'? style.navbar_friend_status_on : style.navbar_friend_status_off}>
                {props.status}
            </div>

        </div>
    );
};

