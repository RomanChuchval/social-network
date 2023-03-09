import React from 'react';
import {UserPagePropsType} from "./UsersPageContainer";
import User from "./User";
import axios from "axios";
import s from './UserPageC.module.css'
import {v1} from "uuid";

class UsersPageC extends React.Component<UserPagePropsType> {

    componentDidMount() {
         const promise = new Promise((res) => {
            res(this.props.setCurrentPage(1))
        }).then( () => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.usersOnPage}&page=${this.props.usersPage.currentPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    console.log(this.props.usersPage.users)
                })
        })
        console.log(promise)
        return promise
    }

    getNewUsersPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.usersOnPage}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    }

    render() {
        const pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.usersOnPage)
        const pagesButtonsCount = []
        for (let i = 1; i <= pagesCount; i++) {
            pagesButtonsCount.push(i)
        }
        const pagesButtons = pagesButtonsCount.map(btn => {
            const buttonClassName = `${s.page_button} ${this.props.usersPage.currentPage === btn ? s.selected_page : ''}`
            return <button key={v1()} className={buttonClassName} onClick={()=>this.getNewUsersPage(btn)}>
                {btn}
            </button>
        })

        const userList = this.props.usersPage.users
            .map(user => <User key={user.id}
                               follow={this.props.follow}
                               unfollow={this.props.unfollow}
                               userData={user}/>)
        return (
            <>
                <div className={s.pagination_btn_container}>
                    {pagesButtons}
                </div>
                <div>
                    {userList}
                </div>
            </>

        )
    }
}

export default UsersPageC;