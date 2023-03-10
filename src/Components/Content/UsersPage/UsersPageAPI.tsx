import React from 'react';
import {UserPagePropsType} from "./UsersPageContainer";
import axios from "axios";
import UsersPage from "./UsersPage";

class UsersPageAPI extends React.Component<UserPagePropsType> {

    componentDidMount() {
        return new Promise((res) => {
            res(this.props.setCurrentPage(1))
        }).then(() => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.usersOnPage}&page=${this.props.usersPage.currentPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    console.log(this.props.usersPage.users)
                })
        })
    }

    getNewUsersPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.usersOnPage}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    }
    render() {
        return (
                <UsersPage users={this.props.usersPage.users}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           totalUsersCount={this.props.usersPage.totalUsersCount}
                           usersOnPage={this.props.usersPage.usersOnPage}
                           currentPage={this.props.usersPage.currentPage}
                           getNewUsersPage={this.getNewUsersPage}
                />
        )
    }
}

export default UsersPageAPI;