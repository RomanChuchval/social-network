import React from 'react';
import {UserPagePropsType} from "./UsersPageContainer";
import UsersPage from "./UsersPage";
import Loader from "../../Common/Loader/Loader";
import s from './UsersPageAPI.module.css'
import {usersAPI} from "../../../DAL/API";

class UsersPageAPI extends React.Component<UserPagePropsType> {

    componentDidMount() {
        return new Promise((res) => res(this.props.setCurrentPageAC(1)))
            .then(() => {
                this.props.setIsLoadingAC(true)
                usersAPI.getUsers(this.props.usersPage.usersOnPage, this.props.usersPage.currentPage)
                    .then(data => this.props.setUsersAC(data.items))
                    .finally(() => this.props.setIsLoadingAC(false))
            })
    }

    getNewUsersPage = (pageNumber: number) => {
        this.props.setIsLoadingAC(true)
        this.props.setCurrentPageAC(pageNumber)
        usersAPI.getUsers(this.props.usersPage.usersOnPage, pageNumber)
            .then(data => this.props.setUsersAC(data.items))
            .finally(() => this.props.setIsLoadingAC(false))
    }

    render() {
        return (
            this.props.usersPage.isLoading
                ? <div className={s.loader_container}>
                    <Loader/>
                </div>
                : <UsersPage users={this.props.usersPage.users}
                             follow={this.props.followAC}
                             unfollow={this.props.unFollowAC}
                             totalUsersCount={this.props.usersPage.totalUsersCount}
                             usersOnPage={this.props.usersPage.usersOnPage}
                             currentPage={this.props.usersPage.currentPage}
                             getNewUsersPage={this.getNewUsersPage}
                             isFollowing={this.props.usersPage.isFollowing}
                             setIsFollowing={this.props.setIsFollowingAC}
                />
        )
    }
}

export default UsersPageAPI;