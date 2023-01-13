import React from 'react';
import style from './DialogsList.module.css'
import {NavLink} from "react-router-dom";

type DialogsListType = {
    id: string;
    name: string
}
export const DialogsList = (props: DialogsListType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={style.dialog}>
            <NavLink activeClassName={style.active} to={path}>{props.name}</NavLink>
        </div>
    );
};

