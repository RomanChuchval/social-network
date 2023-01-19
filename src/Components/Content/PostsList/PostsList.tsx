import React from 'react';
import style from "./PostsList.module.css";
import {Post} from "./Post";
import {v1} from "uuid";

export const PostsList = () => {

    let postsData = [
        {id: v1(), message: 'Hello everybody. It\'s my first post here!', likesCount: 33  },
        {id: v1(), message: 'What a day!', likesCount: 12  },
        {id: v1(), message: 'I\'m learning TypeScript', likesCount: 55  },
    ]

    let posts = postsData.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/> )

    return (
        <div className={style.posts_list}>
            <div className={style.posts_title}>
                Posts
            </div>
            {posts}
        </div>
    );
};

