import {v1} from "uuid";


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navbar: NavbarType[]
}
export type NavbarType = {
    id: string
    name: string

}
export type ProfilePageType = {
    posts: PostsType[]
}
export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type DialogsPageType = {
    dialogsList: DialogsListType[],
    messagesList: MessagesListType[]

}
export type DialogsListType = {
    id: string
    name: string
}
export type MessagesListType = {
    id: string
    message: string
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hello everybody. It\'s my first post here!', likesCount: 33},
            {id: v1(), message: 'What a day!', likesCount: 12},
            {id: v1(), message: 'I\'m learning TypeScript', likesCount: 55},
        ],
    },
    dialogsPage: {
        dialogsList: [
            {id: v1(), name: 'Roman'},
            {id: v1(), name: 'Lera'},
            {id: v1(), name: 'Valera'},
            {id: v1(), name: 'Natasha'},
            {id: v1(), name: 'Victor'},
        ],
        messagesList: [
            {id: v1(), message: 'React'},
            {id: v1(), message: 'Redux'},
            {id: v1(), message: 'HTML'},
            {id: v1(), message: 'JavaScript'},
            {id: v1(), message: 'TypeScript'},
            {id: v1(), message: 'MaterialUI'},
        ]
    },
    navbar: [
        {id: v1(), name:'Roman'},
        {id: v1(), name:'Alex'},
        {id: v1(), name:'Valera'},
    ]
}

export default state
