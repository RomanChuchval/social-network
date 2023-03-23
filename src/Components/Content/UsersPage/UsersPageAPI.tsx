import React from 'react';
import {UserPagePropsType} from "./UsersPageContainer";
import UsersPage from "./UsersPage";
import Loader from "../../Common/Loader/Loader";
import s from './UsersPageAPI.module.css'

class UsersPageAPI extends React.Component<UserPagePropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.usersPage.usersOnPage, this.props.usersPage.currentPage)
    }

    componentWillUnmount() {
        this.props.setCurrentPageAC(1)
    }

    getNewUsersPage = (pageNumber: number) => {
        this.props.getNewUsersPageTC(pageNumber, this.props.usersPage.usersOnPage)
    }

    render() {
        return (
            this.props.usersPage.isLoading
                ? <div className={s.loader_container}>
                    <Loader/>
                </div>
                : <UsersPage users={this.props.usersPage.users}
                             follow={this.props.followUserTC}
                             unfollow={this.props.unFollowUserTC}
                             totalUsersCount={this.props.usersPage.totalUsersCount}
                             usersOnPage={this.props.usersPage.usersOnPage}
                             currentPage={this.props.usersPage.currentPage}
                             getNewUsersPage={this.getNewUsersPage}
                             isFollowing={this.props.usersPage.isFollowing}
                />
        )
    }
}

export default UsersPageAPI;