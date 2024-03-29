import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {
    followUserTC, getNewUsersPageTC, getUsersTC,
    setCurrentPageAC,
    unFollowUserTC,
    UserType,
} from "../../../Redux/users-reducer";
import UsersPageAPI from "./UsersPageAPI";
import {withAuthRedirect} from "../../../Hoc/withAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";
import {
    getFollowingStatus, getLoadingStatus,
    getPageNumber,
    getTotalUsersCount,
    getUsers,
    getUsersOnPageCount
} from "../../../Redux/selectors/user-selectors";

export type UserPagePropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    users: Array<UserType>
    totalUsersCount: number
    usersOnPage: number
    page: number,
    isFollowing: number[]
    isLoading: boolean
}

export type MapDispatchPropsType = {
    setCurrentPageAC: (pageNumber: number) => void
    getUsersTC: (usersOnPage: number, currentPage: number) => void
    getNewUsersPageTC: (pageNumber: number, usersOnPage: number) => void
    followUserTC: (userId: number) => void
    unFollowUserTC: (userId: number) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        usersOnPage: getUsersOnPageCount(state),
        page: getPageNumber(state),
        isFollowing: getFollowingStatus(state),
        isLoading: getLoadingStatus(state)
    }
}


export default compose<ComponentType>(
    connect(mapStateToProps, {
        setCurrentPageAC,
        getUsersTC, getNewUsersPageTC, followUserTC, unFollowUserTC
    }),
    withAuthRedirect
)(UsersPageAPI)
