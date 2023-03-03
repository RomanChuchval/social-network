import React from 'react';
import {UserPagePropsType} from "./UsersPageContainer";
import User from "./User";
import axios from "axios";

class UsersPageC extends React.Component<UserPagePropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return (
            <div>
                {this.props.usersPage.users
                    .map(user => <User key={user.id}
                                       follow={this.props.follow}
                                       unfollow={this.props.unfollow}
                                       userData={user}/>)}
            </div>
        )
    }
}

export default UsersPageC;