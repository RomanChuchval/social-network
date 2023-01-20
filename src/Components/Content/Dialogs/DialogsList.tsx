import React from 'react';
import style from './DialogsList.module.css'
import {NavLink} from "react-router-dom";

type DialogsListType = {
    id: string;
    name: string
    avatar: string
    isOnline: boolean
}
export const DialogsList = (props: DialogsListType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={style.dialog}>
            <>
                <img className={style.dialog_friend_ava} src={props.avatar} alt=""/>
            </>
            <div>
                <NavLink className={style.dialog_friend_name} activeClassName={style.active} to={path}>{props.name}</NavLink>
            </div>
            <div className={props.isOnline ? style.dialog_friend_status_online : style.dialog_friend_status_offline}>

            </div>
        </div>
    );
};

