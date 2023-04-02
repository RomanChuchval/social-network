import React from 'react';
import style from "./ProfileDescription.module.css";
import {UserProfileInfoType} from "../../../Redux/profile-reducer";
import Loader from "../../Common/Loader/Loader";
import maleAvatar from '../../../assets/ava1.png'
import {ProfileStatus} from "./ProfileStatus";

type ProfileDescriptionPropsType = {
    userProfileInfo: UserProfileInfoType | null
    userStatus: string
    updateSelfStatusTC: (status: string) => void
}
export const ProfileDescription = (props: ProfileDescriptionPropsType) => {

    if (!props.userProfileInfo) {
        return <Loader/>
    }

    return (
        <div className={style.profile_description}>

            <img className={style.my_avatar} src={props.userProfileInfo.photos.large
                ? props.userProfileInfo.photos.large
                : maleAvatar} alt="My Avatar"/>
            <div className={style.description}>
                <h3>{props.userProfileInfo.fullName}</h3>
                <p>ID: {props.userProfileInfo.userId}</p>
                <ProfileStatus userStatus={props.userStatus} updateSelfStatusTC={props.updateSelfStatusTC}/>
            </div>
        </div>
    );
};

