import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC, setIsLoadingAC,
    setUsersAC,
    unFollowAC,
    UsersDataType,
    UserType
} from "../../../Redux/users-reducer";
import {Dispatch} from "redux";
import UsersPageAPI from "./UsersPageAPI";

export type UserPagePropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    usersPage: UsersDataType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (data: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setIsLoading: (isLoading: boolean) => void
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
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setIsLoading: (isLoading: boolean) => dispatch(setIsLoadingAC(isLoading))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageAPI)