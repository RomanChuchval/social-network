import React from 'react';
import {UserType} from "../../../Redux/users-reducer";
import s from './User.module.css'
import maleAvatar from '../../../assets/ava1.png'

type UserPropsType = {
    userData: UserType
    follow: (id: number) => void
    unfollow: (id: number) => void
}
const User: React.FC<UserPropsType> = (
    {userData, follow, unfollow}
) => {

    const onFollowHandler = () => {
        follow(userData.id)
    }
    const onUnFollowHandler = () => {
        unfollow(userData.id)
    }


    return (
        <div className={s.user_wrapper}>
            <div className={s.user_ava_wrapper}>
                <div>
                    <img className={s.user_ava} src={userData.photos.small ? '' : maleAvatar} alt="UserAva"/>
                </div>
                <div>
                    {userData.followed
                        ? <button className={s.btn_unfollow} onClick={onUnFollowHandler}>Unfollow</button>
                        : <button className={s.btn_follow} onClick={onFollowHandler}>Follow</button>
                    }
                </div>
            </div>
            <div className={s.user_info_wrapper}>
                <div className={s.user_info}>
                    <div>{userData.name}</div>
                    <div>{userData.status}</div>
                </div>
                {/*<div className={s.user_info_address}>*/}
                {/*    /!*<div>{userData.address.city}</div>*!/*/}
                {/*    /!*<div>{userData.address.country}</div>*!/*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default User;