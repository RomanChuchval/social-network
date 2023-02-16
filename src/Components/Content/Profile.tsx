import React from 'react';
import style from './Profile.module.css'
import {ProfileDescription} from "./Profile/ProfileDescription";
import {AddNewPost} from "./AddNewPost/AddNewPost";
import {PostsList} from "./PostsList/PostsList";
import {ProfileBackground} from "./Profile/ProfileBackground";
import {FinalActionType, ProfilePageType} from "../../Redux/store";


type ProfileType = {
    state: ProfilePageType
    dispatch: (action: FinalActionType) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={style.content_wrapper}>
            <ProfileBackground/>
            <ProfileDescription/>
            <AddNewPost newPostText={props.state.newPostText}
                        dispatch={props.dispatch}
            />
            <PostsList state={props.state.posts}/>
        </div>
    );
};
