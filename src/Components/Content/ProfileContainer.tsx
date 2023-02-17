import React from 'react';
import {StoreType} from "../../Redux/store";
import {Profile} from "./Profile";
import {addPostAC, updateNewPostTextAC} from "../../Redux/profile-reducer";


type ProfileContainerType = {
   store: StoreType

}

export const ProfileContainer = (props: ProfileContainerType) => {

    let profilePageState = props.store.getState().profilePage

    const onAddPostAC = () => props.store.dispatch(addPostAC())
    const onUpdatePostTextAC = (postText: string) => props.store.dispatch(updateNewPostTextAC(postText))

    return <Profile state={profilePageState}
                    addPostCallbackAC={onAddPostAC}
                    updatePostTextCallbackAC={onUpdatePostTextAC}
    />
};
