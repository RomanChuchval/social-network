import maleAvatar from '../assets/ava1.png'
import femaleAvatar from '../assets/ava2.png'
import {v1} from "uuid";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
type FinalActionType = FollowACType

type FollowACType = ReturnType<typeof followAC>

export type UsersStateType = {
    users: Array<UserType>
}
export type UserType = {
    fullName: string
    userId: string
    status: string
    avatar: string
    isFollow: boolean
    address: UserAddressType
}
type UserAddressType = {
    country: string
    city: string
}

const initialState: UsersStateType = {
    users: [
        {
            fullName: 'Victor',
            userId: v1(),
            status: 'IT-INCUBATOR',
            avatar: maleAvatar,
            isFollow: true,
            address: {
                country: 'Belarus',
                city: 'Minsk'
            }
        },
        {
            fullName: 'Roman',
            userId: v1(),
            status: 'Waiting for new F1 season.',
            avatar: maleAvatar,
            isFollow: false,
            address: {
                country: 'Belarus',
                city: 'Minsk'
            }
        },
        {
            fullName: 'Lera',
            userId: v1(),
            status: 'I Love Nord and Belka',
            avatar: femaleAvatar,
            isFollow: true,
            address: {
                country: 'Belarus',
                city: 'Minsk'
            }
        },
        {
            fullName: 'Valera',
            userId: v1(),
            status: 'Learning RegEx as beast!',
            avatar: maleAvatar,
            isFollow: true,
            address: {
                country: 'Belarus',
                city: 'Minsk'
            }
        },
        {
            fullName: 'Natasha',
            userId: v1(),
            status: 'I hate ChatGPT!!!!',
            avatar: femaleAvatar,
            isFollow: true,
            address: {
                country: 'Belarus',
                city: 'Minsk'
            }
        },
    ]
}
export const usersReducer = (state: UsersStateType = initialState, action: FinalActionType): UsersStateType => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(el => el.userId === action.payload.userId
                ? {...el, isFollow: action.payload.isFollow}
                : el
                )}
        case UNFOLLOW:
            return {...state, users: state.users.map(el => el.userId === action.payload.userId
                    ? {...el, isFollow: action.payload.isFollow}
                    : el
                )}
        default: return state
    }
}


export const followAC = (userId: string) => {
    return {
        type: FOLLOW,
        payload: {
            userId,
            isFollow: true
        }
    }
}

export const unFollowAC = (userId: string) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId,
            isFollow: false
        }
    }
}