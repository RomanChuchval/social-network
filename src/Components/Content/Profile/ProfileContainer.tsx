import React from 'react';
import {StoreType} from "../../../Redux/store";
import {Profile} from "./Profile";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profile-reducer";
import {StoreContext} from "../../../StoreContext";


type ProfileContainerType = {
    store: StoreType

}

export const ProfileContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                if (store !== null) {
                    let profilePageState = store.getState().profilePage
                    const onAddPostAC = () => store.dispatch(addPostAC())
                    const onUpdatePostTextAC = (postText: string) => store.dispatch(updateNewPostTextAC(postText))

                    return <Profile state={profilePageState}
                                    addPostCallbackAC={onAddPostAC}
                                    updatePostTextCallbackAC={onUpdatePostTextAC}/>
                }}}
        </StoreContext.Consumer>
    )
};
