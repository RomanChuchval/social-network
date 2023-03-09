


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

type FinalActionType = FollowACType | UnfollowACType | SetUsersACType | setCurrentPageACType

type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType <typeof unFollowAC>
type SetUsersACType = ReturnType <typeof setUsersAC>
type setCurrentPageACType = ReturnType <typeof setCurrentPageAC>

export type UsersDataType = {
    users: Array<UserType>
    totalUsersCount: number
    usersOnPage: number
    currentPage: number
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
    users: [],
    totalUsersCount: 200,
    usersOnPage: 10,
    currentPage: 1
}

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
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload.pageNumber}
        }
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

export const setCurrentPageAC = (pageNumber: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            pageNumber
        }
    } as const
}