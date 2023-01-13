import React from 'react';
import style from './ProfileBackground.module.css'
import profile_background from "../../../assets/background_code.jpeg";

export const ProfileBackground = () => {
    return (
        <div className={style.content_header_img}>
            <img className={style.profile_background} src={profile_background} alt=""/>
        </div>
    );
};

