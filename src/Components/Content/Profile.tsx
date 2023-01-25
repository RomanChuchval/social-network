import React from 'react';
import style from './Profile.module.css'
import {ProfileDescription} from "./Profile/ProfileDescription";
import {AddNewPost} from "./AddNewPost/AddNewPost";
import {PostsList} from "./PostsList/PostsList";
import {ProfileBackground} from "./Profile/ProfileBackground";
import {ProfilePageType} from "../../Redux/state";




type ProfileType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={style.content_wrapper}>
            <ProfileBackground />
            <ProfileDescription/>
            <AddNewPost addPost={props.addPost}/>
            <PostsList state={props.state.posts}/>
        </div>
    );
};
