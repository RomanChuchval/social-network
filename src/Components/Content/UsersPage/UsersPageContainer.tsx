import {connect} from "react-redux";
import UsersPage from "./UsersPage";
import {AppStateType} from "../../../Redux/redux-store";
import {followAC, unFollowAC, UsersStateType} from "../../../Redux/users-reducer";
import {Dispatch} from "redux";

export type UserPagePropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    usersPage: UsersStateType
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    // setUsers: () => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unFollowAC(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)