import React from 'react';
import style from './Content.module.css'
import {ProfileDescription} from "./Profile/ProfileDescription";
import {AddNewPost} from "./AddNewPost/AddNewPost";
import {PostsList} from "./PostsList/PostsList";
import {ProfileBackground} from "./Profile/ProfileBackground";

export const Content = () => {
    return (
        <div className={style.content_wrapper}>
            <ProfileBackground />
            <ProfileDescription/>
            <AddNewPost/>
            <PostsList/>
        </div>
    );
};
