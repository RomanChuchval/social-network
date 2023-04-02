import React from 'react';
import style from './Profile.module.css'
import {ProfileDescription} from "./ProfileDescription";
import {AddNewPost} from "./AddNewPost/AddNewPost";
import {PostsList} from "./PostsList/PostsList";
import {ProfileBackground} from "./ProfileBackground";
import {ProfilePageType} from "../../../Redux/profile-reducer";

type ProfilePropsType = {
    state: ProfilePageType
    addPostAC: () => void
    updateNewPostTextAC: (postText: string) => void
    updateSelfStatusTC: (status: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    const addPostCallbackAC = () => props.addPostAC()
    const updatePostTextCallbackAC = (postText: string) => props.updateNewPostTextAC(postText)

    return (
        <div className={style.content_wrapper}>
            <ProfileBackground/>
            <ProfileDescription userProfileInfo={props.state.userProfileInfo}
                                userStatus={props.state.status}
                                updateSelfStatusTC={props.updateSelfStatusTC}
            />
            <AddNewPost newPostText={props.state.newPostText}
                        addPostCallbackAC={addPostCallbackAC}
                        updatePostTextCallbackAC={updatePostTextCallbackAC}
            />
            <PostsList state={props.state.posts}/>
        </div>
    );
};
