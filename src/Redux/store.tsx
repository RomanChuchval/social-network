import {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import {addMessageAC, updateMessageTextAC} from "./dialogs-reducer";

// export type StateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     navbar: NavbarType[]
// }


//  type DialogsPageType = {
//     dialogsList: DialogsListType[],
//     messagesList: MessagesListType[]
//     newMessageText: string
//
// }
// type DialogsListType = {
//     id: string
//     name: string
//     avatar: string
//     isOnline: boolean
// }
// type MessagesListType = {
//     id: string
//     message: string
// }



//
//  type StoreType = {
//     _state: StateType
//     _rerender: (state: StateType) => void
//     subscribe: (callback: (state: StateType) => void) => void
//     getState: () => StateType
//     dispatch: (action: FinalActionType) => void
// }



// const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: v1(), message: 'Hello everybody. It\'s my first post here!', likesCount: 33},
//                 {id: v1(), message: 'What a day!', likesCount: 12},
//                 {id: v1(), message: 'I\'m learning TypeScript', likesCount: 55},
//                 {id: v1(), message: 'I\'m learning React', likesCount: 55},
//                 {id: v1(), message: 'I\'m learning Redux', likesCount: 55},
//                 {id: v1(), message: 'I\'m learning JavaScript', likesCount: 55},
//                 {id: v1(), message: 'I\'m learning Material UI', likesCount: 55},
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogsList: [
//                 {id: v1(), name: 'Dimych', avatar: avatar1, isOnline: true},
//                 {id: v1(), name: 'Lera', avatar: avatar2, isOnline: true},
//                 {id: v1(), name: 'Valera', avatar: avatar1, isOnline: false},
//                 {id: v1(), name: 'Natasha', avatar: avatar2, isOnline: true},
//                 {id: v1(), name: 'Victor', avatar: avatar1, isOnline: false},
//             ],
//             messagesList: [
//                 {id: v1(), message: 'React'},
//                 {id: v1(), message: 'Redux'},
//                 {id: v1(), message: 'HTML'},
//                 {
//                     id: v1(),
//                     message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, asperiores blanditiis commodi dolore doloremque ducimus enim eos, eum fugiat illo impedit laboriosam magnam magni maxime minima molestias nesciunt obcaecati odio optio perferendis perspiciatis placeat porro quam quisquam quod recusandae reiciendis rem repellendus sapiente sint temporibus ullam ut velit, veritatis voluptas voluptatem voluptatum? Ab accusamus aperiam facilis ipsam! Aperiam atque deleniti, dolorem ex, exercitationem fuga harum hic in incidunt ipsa mollitia neque nisi non quis sapiente sed soluta? Animi culpa cupiditate facere hic illum ipsa numquam quae recusandae suscipit ut. Aliquid atque dolorem est magni non quam quibusdam sequi, tempora veritatis!\n'
//                 },
//                 {
//                     id: v1(),
//                     message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, asperiores blanditiis commodi dolore doloremque ducimus enim eos, eum fugiat illo impedit laboriosam magnam magni maxime minima molestias nesciunt obcaecati odio optio perferendis perspiciatis placeat porro quam quisquam quod recusandae reiciendis rem repellendus sapiente sint temporibus ullam ut velit, veritatis voluptas voluptatem voluptatum? Ab accusamus aperiam facilis ipsam! Aperiam atque deleniti, dolorem ex, exercitationem fuga harum hic in incidunt ipsa mollitia neque nisi non quis sapiente sed soluta? Animi culpa cupiditate facere hic illum ipsa numquam quae recusandae suscipit ut. Aliquid atque dolorem est magni non quam quibusdam sequi, tempora veritatis!\n'
//                 },
//                 {id: v1(), message: 'TypeScript'},
//                 {id: v1(), message: 'MaterialUI'},
//             ],
//             newMessageText: ''
//         },
//         navbar: [
//             {id: v1(), name: 'Andrew', avatar: avatar1, status: 'online'},
//             {id: v1(), name: 'Alex', avatar: avatar1, status: 'offline'},
//             {id: v1(), name: 'Lera', avatar: avatar2, status: 'offline'},
//         ]
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage ,action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.navbar = navbarReducer(this._state.navbar, action)
//         this._rerender(this._state)
//     },
//
//     _rerender() {
//         console.log('State changed')
//     },
//     subscribe(callback: (state: StateType) => void) {
//         this._rerender = callback
//     },
//     getState() {
//         return this._state
//     }
// }

// export default 1
