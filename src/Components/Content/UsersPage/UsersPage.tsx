import React from 'react';
import User from "./User";
import {UserType} from "../../../Redux/users-reducer";
import s from "./UserPage.module.css";
import {v1} from "uuid";

type UsersPagePropsType ={
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUsersCount: number
    usersOnPage: number
    currentPage: number
    getNewUsersPage: (pageNumber: number) => void
}

const UsersPage: React.FC<UsersPagePropsType> = (
    {
        users,
        follow,
        unfollow,
        totalUsersCount,
        usersOnPage,
        currentPage,
        getNewUsersPage
    }
) => {

    const pagesCount = Math.ceil(totalUsersCount / usersOnPage)
    const pagesButtonsCount = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesButtonsCount.push(i)
    }
    const pagesButtons = pagesButtonsCount.map(btn => {
        const buttonClassName = `${s.page_button} ${currentPage === btn ? s.selected_page : ''}`
        return <button key={v1()} className={buttonClassName} onClick={() => getNewUsersPage(btn)}>
            {btn}
        </button>
    })

    const userList = users
        .map(user => <User key={user.id}
                           follow={follow}
                           unfollow={unfollow}
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

    );
};

export default UsersPage;