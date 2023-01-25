import React, {useRef} from 'react';
import style from './AddNewPost.module.css'

type AddNewPostPropsType = {
    addPost: (postMessage: string) => void
}

export const AddNewPost = (props: AddNewPostPropsType) => {

   const ref = useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
       if (ref.current !== null) {
           let newPost = ref.current.value
           props.addPost(newPost)
           ref.current.value = ''
       }
    }

    return (
        <div className={style.add_post_form}>
            <div className={style.add_post_title}>Add new post</div>
            <input ref={ref} type='text' className={style.add_post_input} name=""></input>
            <button onClick={onClickHandler} className={style.add_post_button}>Send</button>
        </div>
    );
};