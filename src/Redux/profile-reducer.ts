import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../DAL/API";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE_INFO = 'SET_USER_PROFILE_INFO'

export type FinalActionType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof setUserProfileInfoAC>

export type UserProfileInfoType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    userProfileInfo: UserProfileInfoType | null
}
export type PostsType = {
    id: string
    message: string
    likesCount: number
}

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hello everybody. It\'s my first post here!', likesCount: 33},
        {id: v1(), message: 'What a day!', likesCount: 12},
        {id: v1(), message: 'I\'m learning TypeScript', likesCount: 55},
        {id: v1(), message: 'I\'m learning React', likesCount: 55},
        {id: v1(), message: 'I\'m learning Redux', likesCount: 55},
        {id: v1(), message: 'I\'m learning JavaScript', likesCount: 55},
        {id: v1(), message: 'I\'m learning Material UI', likesCount: 55},
    ],
    newPostText: '',
    userProfileInfo: null
}

export const profileReducer = (state:ProfilePageType = initialState, action: FinalActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), message: state.newPostText, likesCount: 0}
            return {...state, newPostText : '', posts: [newPost, ...state.posts]}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.payload.postText}
        case SET_USER_PROFILE_INFO:
            return {...state, userProfileInfo: action.payload.userProfileInfo}
        default:
            return state
    }
}

export const updateNewPostTextAC = (postText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        payload: {
            postText
        }
    } as const
}
export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}

export const setUserProfileInfoAC = (userProfileInfo: UserProfileInfoType) => {
    return {
        type: SET_USER_PROFILE_INFO,
        payload: {
            userProfileInfo
        }
    } as const
}

// ========== ThunkCreators ========== //

export const getUserProfileInfoTC = (userId: string) => {

    return (dispatch: Dispatch) => {
        usersAPI.getUserProfileInfo(userId)
            .then(data => {
                dispatch(setUserProfileInfoAC(data))
            })
    }
}




