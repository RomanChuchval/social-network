import React from 'react';
import style from './AddNewPost.module.css'
import {SubmitHandler, useForm} from "react-hook-form";

type AddNewPostPropsType = {
    newPostText: string
    addPostCallbackAC: (message: string) => void
    updatePostTextCallbackAC: (postText: string) => void
}

type InputsType = {
    message: string
}

export const AddNewPost = (props: AddNewPostPropsType) => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm<InputsType>({
        mode: "onSubmit"
    })

    const onClickHandler: SubmitHandler<InputsType> = (messageData) => {
        props.addPostCallbackAC(messageData.message)
        reset()
        console.log(messageData)
    }

    return (
        <form className={style.add_post_form} onSubmit={handleSubmit(onClickHandler)}>
            <div className={style.add_post_title}>Add new post</div>
            <input className={style.add_post_input} {...register('message', {required: 'message cannot be empty'})}/>
            <div className={style.error_message}>{errors?.message && errors?.message?.message}</div>
            <button type={'submit'} className={style.add_post_button}>Send</button>
        </form>
    );
};