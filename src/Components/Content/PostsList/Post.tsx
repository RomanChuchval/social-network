import React from 'react';
import style from './Post.module.css'
import avatar from "../../../assets/MyAvatar.jpg";

type PostPropsType = {
    message: string;
    likesCount: number;
}

 export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={style.posts_item}>
            <img className={style.post_avatar} src={avatar} alt=""/>
            <div className={style.post_likes}>Likes: {props.likesCount}</div>
            <div className={style.post_text}>{props.message}</div>
        </div>
    );
};
