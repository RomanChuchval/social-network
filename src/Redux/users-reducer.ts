import maleAvatar from '../assets/ava1.png'
import femaleAvatar from '../assets/ava2.png'
import {v1} from "uuid";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type FinalActionType = FollowACType | UnfollowACType | SetUsersACType

type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType <typeof unFollowAC>
type SetUsersACType = ReturnType <typeof setUsersAC>

export type UsersDataType = {
    users: Array<UserType>
}
export type UserType = {
    name:string
    id: number
    uniqueUrlName: null
    photos: UserPhotoType
    status: string | null
    followed: boolean
}

type UserPhotoType = {
    small: null
    large: null
}

const initialState: UsersDataType = {
    users: []
}

// export type UsersStateType = {
//     users: Array<UserType>
// }
// export type UserType = {
//     fullName: string
//     userId: string
//     status: string
//     avatar: string
//     isFollow: boolean
//     address: UserAddressType
// }
// type UserAddressType = {
//     country: string
//     city: string
// }
//
// const initialState: UsersStateType = {
//     users: [
//         // {
//         //     fullName: 'Victor',
//         //     userId: v1(),
//         //     status: 'IT-INCUBATOR',
//         //     avatar: maleAvatar,
//         //     isFollow: true,
//         //     address: {
//         //         country: 'Belarus',
//         //         city: 'Minsk'
//         //     }
//         // },
//         // {
//         //     fullName: 'Roman',
//         //     userId: v1(),
//         //     status: 'Waiting for new F1 season.',
//         //     avatar: maleAvatar,
//         //     isFollow: false,
//         //     address: {
//         //         country: 'Belarus',
//         //         city: 'Minsk'
//         //     }
//         // },
//         // {
//         //     fullName: 'Lera',
//         //     userId: v1(),
//         //     status: 'I Love Nord and Belka',
//         //     avatar: femaleAvatar,
//         //     isFollow: true,
//         //     address: {
//         //         country: 'Belarus',
//         //         city: 'Minsk'
//         //     }
//         // },
//         // {
//         //     fullName: 'Valera',
//         //     userId: v1(),
//         //     status: 'Learning RegEx as beast!',
//         //     avatar: maleAvatar,
//         //     isFollow: true,
//         //     address: {
//         //         country: 'Belarus',
//         //         city: 'Minsk'
//         //     }
//         // },
//         // {
//         //     fullName: 'Natasha',
//         //     userId: v1(),
//         //     status: 'I hate ChatGPT!!!!',
//         //     avatar: femaleAvatar,
//         //     isFollow: true,
//         //     address: {
//         //         country: 'Belarus',
//         //         city: 'Minsk'
//         //     }
//         // },
//     ]
// }
export const usersReducer = (state: UsersDataType = initialState, action: FinalActionType): UsersDataType => {

    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...action.payload.usersArray]}
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.payload.userId
                ? {...u, followed: action.payload.isFollow}
                : u
                )}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.payload.userId
                    ? {...u, followed: action.payload.isFollow}
                    : u
                )}
        default: return state
        }
    }



export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId,
            isFollow: true
        }
    } as const
}

export const unFollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId,
            isFollow: false
        }
    } as const
}

export const setUsersAC = (usersArray: Array<UserType>) => {
    return {
        type: SET_USERS,
        payload: {
            usersArray: usersArray
        }
    } as const
}