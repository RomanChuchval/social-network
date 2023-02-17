import React, {useRef} from 'react';
import style from './AddNewPost.module.css'

type AddNewPostPropsType = {
    newPostText: string
    addPostCallbackAC: () => void
    updatePostTextCallbackAC: (postText: string) => void
}

export const AddNewPost = (props: AddNewPostPropsType) => {

   const ref = useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
       if (ref.current !== null) {
           props.addPostCallbackAC()
       }
    }
    const onChangeHandler = () => {
       if (ref.current !== null) {
           props.updatePostTextCallbackAC(ref.current.value)
       }
    }

    return (
        <div className={style.add_post_form}>
            <div className={style.add_post_title}>Add new post</div>
            <input onChange={onChangeHandler} value={props.newPostText} ref={ref} className={style.add_post_input}></input>
            <button onClick={onClickHandler} className={style.add_post_button}>Send</button>
        </div>
    );
};