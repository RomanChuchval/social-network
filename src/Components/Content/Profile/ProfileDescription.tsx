import React from 'react';
import style from "./ProfileDescription.module.css";
import MyAvatar from './../../../assets/MyAvatar.jpg'
export const ProfileDescription = () => {
    return (
        <div className={style.profile_description}>
            <img className={style.my_avatar} src={MyAvatar} alt="My Avatar"/>
            <div className={style.description}>
                <h3>Roman Chuchval</h3>
                <p>9 February</p>
                <p>Minsk, Belarus</p>
                <p>Student at IT-Incubator 2023</p>
            </div>
        </div>
    );
};

