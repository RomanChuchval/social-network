import React from 'react';
import style from "./PostsList.module.css";
import {Post} from "./Post";

export const PostsList = () => {
    return (
        <div className={style.posts_list}>
            <div className={style.posts_title}>
                Posts
            </div>
            <Post message={`Hello everybody. It's my first post here!`} likesCount={33}/>
            <Post message={`What a day!`} likesCount={12}/>
            <Post message={`I'm learning TypeScript`} likesCount={5}/>
        </div>
    );
};

