import React from 'react';
import {UserPagePropsType} from "./UsersPageContainer";
import User from "./User";

const UsersPage = (props: UserPagePropsType) => {

    const usersList = props.usersPage.users
        .map(user => <User
            follow={props.follow}
            unfollow={props.unfollow}
            userData={user}/>)

    return (
        <div>
            {usersList}
        </div>
    );
};

export default UsersPage;