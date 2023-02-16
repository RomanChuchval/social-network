import {DialogsPageType, FinalActionType} from "./store";
import {v1} from "uuid";
import avatar1 from "../assets/ava1.png";
import avatar2 from "../assets/ava2.png";


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
        {
            id: v1(),
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, asperiores blanditiis commodi dolore doloremque ducimus enim eos, eum fugiat illo impedit laboriosam magnam magni maxime minima molestias nesciunt obcaecati odio optio perferendis perspiciatis placeat porro quam quisquam quod recusandae reiciendis rem repellendus sapiente sint temporibus ullam ut velit, veritatis voluptas voluptatem voluptatum? Ab accusamus aperiam facilis ipsam! Aperiam atque deleniti, dolorem ex, exercitationem fuga harum hic in incidunt ipsa mollitia neque nisi non quis sapiente sed soluta? Animi culpa cupiditate facere hic illum ipsa numquam quae recusandae suscipit ut. Aliquid atque dolorem est magni non quam quibusdam sequi, tempora veritatis!\n'
        },
        {
            id: v1(),
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, asperiores blanditiis commodi dolore doloremque ducimus enim eos, eum fugiat illo impedit laboriosam magnam magni maxime minima molestias nesciunt obcaecati odio optio perferendis perspiciatis placeat porro quam quisquam quod recusandae reiciendis rem repellendus sapiente sint temporibus ullam ut velit, veritatis voluptas voluptatem voluptatum? Ab accusamus aperiam facilis ipsam! Aperiam atque deleniti, dolorem ex, exercitationem fuga harum hic in incidunt ipsa mollitia neque nisi non quis sapiente sed soluta? Animi culpa cupiditate facere hic illum ipsa numquam quae recusandae suscipit ut. Aliquid atque dolorem est magni non quam quibusdam sequi, tempora veritatis!\n'
        },
        {id: v1(), message: 'TypeScript'},
        {id: v1(), message: 'MaterialUI'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action: FinalActionType) => {

    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.payload.messageText
            return state
        case ADD_MESSAGE:
            let newMessage = {id: v1(), message: state.newMessageText}
            state.messagesList = [newMessage, ...state.messagesList]
            state.newMessageText = ''
            return state
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