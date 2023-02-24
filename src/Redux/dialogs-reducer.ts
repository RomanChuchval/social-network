import {v1} from "uuid";
import avatar1 from "../assets/ava1.png";
import avatar2 from "../assets/ava2.png";

export type DialogsPageType = {
    dialogsList: DialogsListType[],
    messagesList: MessagesListType[]
    newMessageText: string

}
export type DialogsListType = {
    id: string
    name: string
    avatar: string
    isOnline: boolean
}
export type MessagesListType = {
    id: string
    message: string
}

export type FinalActionType =
    ReturnType<typeof updateMessageTextAC> |
    ReturnType<typeof addMessageAC>


const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'


let initialState: DialogsPageType = {
    dialogsList: [
        {id: v1(), name: 'Dimych', avatar: avatar1, isOnline: true},
        {id: v1(), name: 'Lera', avatar: avatar2, isOnline: true},
        {id: v1(), name: 'Valera', avatar: avatar1, isOnline: false},
        {id: v1(), name: 'Natasha', avatar: avatar2, isOnline: true},
        {id: v1(), name: 'Victor', avatar: avatar1, isOnline: false},
    ],
    messagesList: [
        {id: v1(), message: 'React'},
        {id: v1(), message: 'Redux'},
        {id: v1(), message: 'HTML'},
        {id: v1(), message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '},
        {id: v1(), message: 'TypeScript'},
        {id: v1(), message: 'MaterialUI'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state: DialogsPageType = initialState, action: FinalActionType): DialogsPageType => {

    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            return {...state, newMessageText: action.payload.messageText}
        case ADD_MESSAGE:
            let newMessage = {id: v1(), message: state.newMessageText}
            return {...state, newMessageText:'', messagesList: [newMessage,...state.messagesList]}
        default:
            return state
    }
}

export const updateMessageTextAC = (messageText: string) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        payload: {
            messageText
        }
    } as const
}
export const addMessageAC = () => {
    return {type: ADD_MESSAGE} as const
}

export default dialogsReducer;