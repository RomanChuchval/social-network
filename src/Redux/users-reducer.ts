const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_LOADING = 'SET_IS_LOADING'
const SET_IS_FOLLOWING = 'SET_IS_FOLLOWING'

type FinalActionType = FollowACType
    | UnfollowACType
    | SetUsersACType
    | setCurrentPageACType
    | setIsLoadingACType
    | setIsFollowingACType

type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unFollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setIsLoadingACType = ReturnType<typeof setIsLoadingAC>
type setIsFollowingACType = ReturnType<typeof setIsFollowingAC>

export type UsersDataType = {
    users: Array<UserType>
    totalUsersCount: number
    usersOnPage: number
    currentPage: number
    isLoading: boolean
    isFollowing: Array<number>
}
export type UserType = {
    name: string
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
    currentPage: 1,
    isLoading: false,
    isFollowing: []
}

export const usersReducer = (state: UsersDataType = initialState, action: FinalActionType): UsersDataType => {

    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...action.payload.usersArray]}
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => u.id === action.payload.userId
                    ? {...u, followed: action.payload.isFollow}
                    : u
                )
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => u.id === action.payload.userId
                    ? {...u, followed: action.payload.isFollow}
                    : u
                )
            }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload.pageNumber}
        }
        case SET_IS_LOADING: {
            return {...state, isLoading: action.payload.isLoading}
        }
        case SET_IS_FOLLOWING: {
            return {...state,
                isFollowing: action.payload.isFollowing
                    ? [...state.isFollowing, action.payload.userId]
                    : state.isFollowing.filter(id => id !== action.payload.userId)
            }
        }
        default:
            return state
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

export const setIsLoadingAC = (isLoading: boolean) => {
    return {
        type: SET_IS_LOADING,
        payload: {
            isLoading
        }
    } as const
}

export const setIsFollowingAC = (isFollowing: boolean, userId: number) => {
    return {
        type: SET_IS_FOLLOWING,
        payload: {
            isFollowing,
            userId
        }
    } as const
}