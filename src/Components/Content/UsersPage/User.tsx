import React from 'react';
import {UserType} from "../../../Redux/users-reducer";
import s from './User.module.css'
import maleAvatar from '../../../assets/ava1.png'
import {NavLink} from "react-router-dom";
import {followAPI} from "../../../DAL/API";

type UserPropsType = {
    userData: UserType
    follow: (id: number) => void
    unfollow: (id: number) => void
    isFollowing: Array<number>
    setIsFollowing: (isFollowing: boolean, userId: number) => void
}
const User: React.FC<UserPropsType> = (
    {userData, follow, unfollow, isFollowing, setIsFollowing}
) => {

    const onFollowHandler = () => {
        setIsFollowing(true, userData.id)
        followAPI.followUser(userData.id)
            .then(data => {
                if (data.resultCode === 0)
                    follow(userData.id)
            })
            .finally(()=> setIsFollowing(false, userData.id))

    }
    const onUnFollowHandler = () => {
        setIsFollowing(true, userData.id)
        followAPI.unfollowUser(userData.id)
            .then(data => {
                if (data.resultCode === 0)
                    unfollow(userData.id)
            })
            .finally(()=> setIsFollowing(false, userData.id))
    }

     const isButtonDisable = isFollowing.some(id => id === userData.id)

    return (
        <div className={s.user_wrapper}>
            <div className={s.user_ava_wrapper}>
                <div>
                    <NavLink to={`/profile/${userData.id}`}>
                        <img className={s.user_ava} src={userData.photos.small ? userData.photos.small : maleAvatar}
                             alt="UserAva"/>
                    </NavLink>
                </div>
                <div>
                    {userData.followed
                        ? <button disabled={isButtonDisable} className={s.btn_unfollow}
                                  onClick={onUnFollowHandler}>Unfollow</button>
                        : <button disabled={isButtonDisable} className={s.btn_follow} onClick={onFollowHandler}>Follow</button>
                    }
                </div>
            </div>
            <div className={s.user_info_wrapper}>
                <div className={s.user_info}>
                    <div>{userData.name}</div>
                    <div>{userData.status}</div>
                    <div>{userData.id}</div>
                </div>
            </div>
        </div>
    );
};

export default User;