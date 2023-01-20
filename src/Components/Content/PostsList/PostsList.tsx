import React from 'react';
import style from "./PostsList.module.css";
import {Post} from "./Post";
import {PostsType} from "../../../Redux/state";


type PostListType = {
    state: PostsType[]
}

export const PostsList = (props: PostListType) => {



    let posts = props.state.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/> )

    return (
        <div className={style.posts_list}>
            <div className={style.posts_title}>
                Posts
            </div>
            {posts}
        </div>
    );
};

