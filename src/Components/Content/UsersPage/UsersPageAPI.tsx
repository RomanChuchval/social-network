import React from 'react';
import {UserPagePropsType} from "./UsersPageContainer";
import axios from "axios";
import UsersPage from "./UsersPage";
import Loader from "../../Common/Loader/Loader";
import s from './UsersPageAPI.module.css'

class UsersPageAPI extends React.Component<UserPagePropsType> {

    componentDidMount() {
        return new Promise((res) => {
            res(this.props.setCurrentPage(1))
        }).then(() => {
            this.props.setIsLoading(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=
            ${this.props.usersPage.usersOnPage}&page=${this.props.usersPage.currentPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setIsLoading(false)
                })
        })
    }

    getNewUsersPage = (pageNumber: number) => {
        this.props.setIsLoading(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=
        ${this.props.usersPage.usersOnPage}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setIsLoading(false)
            })
    }

    render() {
        return (
            this.props.usersPage.isLoading
                ? <div className={s.loader_container}>
                    <Loader/>
                </div>
                : <UsersPage users={this.props.usersPage.users}
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