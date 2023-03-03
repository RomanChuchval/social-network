// import React from 'react';
// import {UserPagePropsType} from "./UsersPageContainer";
// import User from "./User";
// import  axios from "axios";
//
// const UsersPage = (props: UserPagePropsType) => {
//
//     if (props.usersPage.users.length === 0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//             props.setUsers(response.data.items)
//         })
//     }
//
//
//     const usersList = props.usersPage.users
//         .map(user => <User key={user.id}
//             follow={props.follow}
//             unfollow={props.unfollow}
//             userData={user}/>)
//
//     return (
//         <div>
//             {usersList}
//         </div>
//     );
// };
//
export default undefined