import {AppStateType} from "../redux-store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getUsersOnPageCount = (state: AppStateType) => {
    return state.usersPage.usersOnPage
}
export const getPageNumber = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getFollowingStatus = (state: AppStateType) => {
    return state.usersPage.isFollowing
}

export const getLoadingStatus = (state: AppStateType) => {
    return state.usersPage.isLoading
}


