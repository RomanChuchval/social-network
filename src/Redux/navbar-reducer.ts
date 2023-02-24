import {v1} from "uuid";
import avatar1 from "../assets/ava1.png";
import avatar2 from "../assets/ava2.png";
import {FinalActionType} from "./dialogs-reducer";

export type NavbarType = {
    id: string
    name: string
    avatar: string
    status: string
}

let initialState: NavbarType[] = [
    {id: v1(), name: 'Andrew', avatar: avatar1, status: 'online'},
    {id: v1(), name: 'Alex', avatar: avatar1, status: 'offline'},
    {id: v1(), name: 'Lera', avatar: avatar2, status: 'offline'},
]

const navbarReducer = (state = initialState, action: FinalActionType) => {
    return state
}

export default navbarReducer