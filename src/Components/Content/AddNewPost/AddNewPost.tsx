import React, {useRef} from 'react';
import style from './AddNewPost.module.css'
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profile-reducer";
import {FinalActionType} from "../../../Redux/store";

type AddNewPostPropsType = {
    dispatch: (action: FinalActionType) => void
    newPostText: string
}

export const AddNewPost = (props: AddNewPostPropsType) => {

   const ref = useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
       if (ref.current !== null) {
           props.dispatch(addPostAC())
       }
    }
    const onChangeHandler = () => {
       if (ref.current !== null) {
           props.dispatch(updateNewPostTextAC(ref.current.value))
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