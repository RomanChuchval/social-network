import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC, setIsFollowingAC, setIsLoadingAC,
    setUsersAC,
    unFollowAC,
    UsersDataType,
    UserType
} from "../../../Redux/users-reducer";
import UsersPageAPI from "./UsersPageAPI";

export type UserPagePropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    usersPage: UsersDataType
}

type MapDispatchPropsType = {
    followAC: (userId: number) => void
    unFollowAC: (userId: number) => void
    setUsersAC: (data: Array<UserType>) => void
    setCurrentPageAC: (pageNumber: number) => void
    setIsLoadingAC: (isLoading: boolean) => void
    setIsFollowingAC: (isFollowing: boolean, userId: number) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userId) => dispatch(followAC(userId)),
//         unfollow: (userId) => dispatch(unFollowAC(userId)),
//         setUsers: (data) => dispatch(setUsersAC(data)),
//         setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
//         setIsLoading: (isLoading: boolean) => dispatch(setIsLoadingAC(isLoading)),
//         setIsFollowing: (isFollowing: boolean, userId: number) => dispatch(setIsFollowingAC(isFollowing, userId))
//     }
// }

export default connect(mapStateToProps, {
    followAC, unFollowAC, setUsersAC, setCurrentPageAC, setIsLoadingAC, setIsFollowingAC
})(UsersPageAPI)