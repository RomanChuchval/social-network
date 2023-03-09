import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    unFollowAC,
    UsersDataType,
    UserType
} from "../../../Redux/users-reducer";
import {Dispatch} from "redux";
import UsersPageC from "./UsersPageС";

export type UserPagePropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    usersPage: UsersDataType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (data: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unFollowAC(userId)),
        setUsers: (data) => dispatch(setUsersAC(data)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageC)