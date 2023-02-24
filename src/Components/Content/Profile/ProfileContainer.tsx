import React from 'react';
import {Profile} from "./Profile";
import {addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

// export const ProfileContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 if (store !== null) {
//                     let profilePageState = store.getState().profilePage
//                     const onAddPostAC = () => store.dispatch(addPostAC())
//                     const onUpdatePostTextAC = (postText: string) => store.dispatch(updateNewPostTextAC(postText))
//
//                     return <Profile state={profilePageState}
//                                     addPostCallbackAC={onAddPostAC}
//                                     updatePostTextCallbackAC={onUpdatePostTextAC}/>
//                 }}}
//         </StoreContext.Consumer>
//     )
// };

export type ProfilePropsType = mapStatePropsType & mapDispatchPropsType

export type mapStatePropsType = {
    state: ProfilePageType
}

export type mapDispatchPropsType = {
    addPostCallbackAC: () => void
    updatePostTextCallbackAC: (postText: string) => void
}

export const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        state: state.profilePage
    }
}

export const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPostCallbackAC: () => dispatch(addPostAC()),
        updatePostTextCallbackAC: (postText: string) => dispatch(updateNewPostTextAC(postText))
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
