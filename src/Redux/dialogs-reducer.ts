import {v1} from "uuid";
import avatar1 from "../assets/ava1.png";
import avatar2 from "../assets/ava2.png";

export type DialogsPageType = {
    dialogsList: DialogsListType[],
    messagesList: MessagesListType[]
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

export type FinalActionType = ReturnType<typeof addMessageAC>

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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: FinalActionType): DialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: v1(), message: action.payload.message}
            return {...state, messagesList: [newMessage, ...state.messagesList]}
        default:
            return state
    }
}
export const addMessageAC = (message: string) => {
    return {
        type: ADD_MESSAGE,
        payload: {message}
    } as const
}

export default dialogsReducer;