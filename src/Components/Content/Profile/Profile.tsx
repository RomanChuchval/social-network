import React from 'react';
import style from './Profile.module.css'
import {ProfileDescription} from "./ProfileDescription";
import {AddNewPost} from "./AddNewPost/AddNewPost";
import {PostsList} from "./PostsList/PostsList";
import {ProfileBackground} from "./ProfileBackground";
import {ProfilePropsType} from "./ProfileContainer";

//
// type ProfileType = {
//     state: ProfilePageType
//     addPostCallbackAC: () => void
//     updatePostTextCallbackAC: (postText: string) => void
// }

export const Profile = (props: ProfilePropsType) => {

    const addPostCallbackAC = () => props.addPostCallbackAC()
    const updatePostTextCallbackAC = (postText: string) => props.updatePostTextCallbackAC(postText)


    return (
        <div className={style.content_wrapper}>
            <ProfileBackground/>
            <ProfileDescription/>
            <AddNewPost newPostText={props.state.newPostText}
                        addPostCallbackAC={addPostCallbackAC}
                        updatePostTextCallbackAC={updatePostTextCallbackAC}
            />
            <PostsList state={props.state.posts}/>
        </div>
    );
};
