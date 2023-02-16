import {v1} from "uuid";
import {FinalActionType, ProfilePageType} from "./store";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
    newPostText: ''
}

const profileReducer = (state = initialState, action: FinalActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), message: state.newPostText, likesCount: 0}
            state.posts = [newPost, ...state.posts]
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.payload.postText
            return state
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
    return {type: ADD_POST} as const
}
export default profileReducer;