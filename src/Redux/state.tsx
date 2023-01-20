import {v1} from "uuid";
import avatar1 from '../assets/ava1.png'
import avatar2 from '../assets/ava2.png'


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navbar: NavbarType[]
}
export type NavbarType = {
    id: string
    name: string
    avatar: string
    status: string

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
    avatar: string
    isOnline: boolean
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
            {id: v1(), name: 'Dimych', avatar: avatar1, isOnline: true},
            {id: v1(), name: 'Lera', avatar: avatar2, isOnline: true},
            {id: v1(), name: 'Valera', avatar: avatar1, isOnline: false},
            {id: v1(), name: 'Natasha', avatar: avatar2, isOnline: true},
            {id: v1(), name: 'Victor', avatar: avatar1, isOnline: false},
        ],
        messagesList:  [
            {id: v1(), message: 'React'},
            {id: v1(), message: 'Redux'},
            {id: v1(), message: 'HTML'},
            {id: v1(), message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, asperiores blanditiis commodi dolore doloremque ducimus enim eos, eum fugiat illo impedit laboriosam magnam magni maxime minima molestias nesciunt obcaecati odio optio perferendis perspiciatis placeat porro quam quisquam quod recusandae reiciendis rem repellendus sapiente sint temporibus ullam ut velit, veritatis voluptas voluptatem voluptatum? Ab accusamus aperiam facilis ipsam! Aperiam atque deleniti, dolorem ex, exercitationem fuga harum hic in incidunt ipsa mollitia neque nisi non quis sapiente sed soluta? Animi culpa cupiditate facere hic illum ipsa numquam quae recusandae suscipit ut. Aliquid atque dolorem est magni non quam quibusdam sequi, tempora veritatis!\n'},
            {id: v1(), message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, asperiores blanditiis commodi dolore doloremque ducimus enim eos, eum fugiat illo impedit laboriosam magnam magni maxime minima molestias nesciunt obcaecati odio optio perferendis perspiciatis placeat porro quam quisquam quod recusandae reiciendis rem repellendus sapiente sint temporibus ullam ut velit, veritatis voluptas voluptatem voluptatum? Ab accusamus aperiam facilis ipsam! Aperiam atque deleniti, dolorem ex, exercitationem fuga harum hic in incidunt ipsa mollitia neque nisi non quis sapiente sed soluta? Animi culpa cupiditate facere hic illum ipsa numquam quae recusandae suscipit ut. Aliquid atque dolorem est magni non quam quibusdam sequi, tempora veritatis!\n'},
            {id: v1(), message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, asperiores blanditiis commodi dolore doloremque ducimus enim eos, eum fugiat illo impedit laboriosam magnam magni maxime minima molestias nesciunt obcaecati odio optio perferendis perspiciatis placeat porro quam quisquam quod recusandae reiciendis rem repellendus sapiente sint temporibus ullam ut velit, veritatis voluptas voluptatem voluptatum? Ab accusamus aperiam facilis ipsam! Aperiam atque deleniti, dolorem ex,  sed soluta? Animi culpa cupiditate facere hic '},
            {id: v1(), message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, asperiores blanditiis commodi dolore doloremque ducimus enim eos, eum fugiat illo impedit laboriosam magnam magni maxime minima molestias nesciunt obcaecati odio optio perferendis perspiciatis placeat porro quam quisquam quod recusandae reiciendis rem repellendus sapiente sint temporibus ullam ut velit, veritatis voluptas voluptatem voluptatum? Ab accusamus aperiam facilis ipsam! Aperiam atque deleniti, dolorem ex, exercitationem fuga harum hic in incidunt ipsa mollitia neque nisi non quis sapiente sed soluta? Animi culpa cupiditate facere hic '},
            {id: v1(), message: 'TypeScript'},
            {id: v1(), message: 'MaterialUI'},
        ]
    },
    navbar: [
        {id: v1(), name:'Andrew', avatar: avatar1, status: 'online'},
        {id: v1(), name:'Alex', avatar: avatar1, status: 'offline'},
        {id: v1(), name:'Lera', avatar: avatar2, status: 'online'},
    ]
}

export default state
