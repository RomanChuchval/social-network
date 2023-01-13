import React from 'react';
import style from './AddNewPost.module.css'

export const AddNewPost = () => {
    return (
        <div className={style.add_post_form}>
            <div className={style.add_post_title}>Add new post</div>
            <input type='text' className={style.add_post_input} name=""></input>
            <button className={style.add_post_button}>Send</button>
        </div>
    );
};