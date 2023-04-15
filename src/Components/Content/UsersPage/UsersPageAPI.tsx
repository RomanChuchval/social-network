import React from 'react';
import {UserPagePropsType} from "./UsersPageContainer";
import UsersPage from "./UsersPage";
import Loader from "../../Common/Loader/Loader";
import s from './UsersPageAPI.module.css'

class UsersPageAPI extends React.Component<UserPagePropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.usersOnPage, this.props.page)
    }

    componentWillUnmount() {
        this.props.setCurrentPageAC(1)
    }

    getNewUsersPage = (pageNumber: number) => {
        this.props.getNewUsersPageTC(pageNumber, this.props.usersOnPage)
    }

    render() {
        return (
            this.props.isLoading
                ? <div className={s.loader_container}>
                    <Loader/>
                </div>
                : <UsersPage users={this.props.users}
                             totalUsersCount={this.props.totalUsersCount}
                             usersOnPage={this.props.usersOnPage}
                             currentPage={this.props.page}
                             isFollowing={this.props.isFollowing}
                             follow={this.props.followUserTC}
                             unfollow={this.props.unFollowUserTC}
                             getNewUsersPage={this.getNewUsersPage}
                />
        )
    }
}

export default UsersPageAPI;