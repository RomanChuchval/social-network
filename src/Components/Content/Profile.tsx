import React from 'react';
import style from './Profile.module.css'
import {ProfileDescription} from "./Profile/ProfileDescription";
import {AddNewPost} from "./AddNewPost/AddNewPost";
import {PostsList} from "./PostsList/PostsList";
import {ProfileBackground} from "./Profile/ProfileBackground";

export const Profile = () => {
    return (
        <div className={style.content_wrapper}>
            <ProfileBackground />
            <ProfileDescription/>
            <AddNewPost/>
            <PostsList/>
        </div>
    );
};
