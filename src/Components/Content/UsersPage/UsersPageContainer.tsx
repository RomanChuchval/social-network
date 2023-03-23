import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {
    followUserTC, getNewUsersPageTC, getUsersTC,
    setCurrentPageAC,
    unFollowUserTC,
    UsersDataType,
} from "../../../Redux/users-reducer";
import UsersPageAPI from "./UsersPageAPI";

export type UserPagePropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    usersPage: UsersDataType
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
        usersPage: state.usersPage
    }
}

export default connect(mapStateToProps, {
    setCurrentPageAC,
    getUsersTC, getNewUsersPageTC, followUserTC, unFollowUserTC
})(UsersPageAPI)