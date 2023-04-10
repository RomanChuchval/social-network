import React from 'react';
import style from "./Dialogs.module.css";
import {SubmitHandler, useForm} from "react-hook-form";

type MessageSendFormType = {
    addPost: (message: string) => void
}

type InputsType = {
    dialogMessage: string
}

export const MessageSendForm: React.FC<MessageSendFormType> = ({addPost}) => {

    const {register, handleSubmit, reset, formState:{errors}} = useForm<InputsType>({mode: "onSubmit"})

    const onSubmit: SubmitHandler<InputsType> = (data) => {
        addPost(data.dialogMessage)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.dialogs_message_sender}>
            <input
                {...register('dialogMessage', {required: 'Message cannot be empty'})}
                autoComplete={'off'}
                placeholder={'Type message...'}
                className={style.dialogs_input}
            />
            <div className={style.error_input_field}>
                {errors?.dialogMessage && errors.dialogMessage.message}
            </div>
            <button className={style.dialogs_send_button}>Send</button>
        </form>
    );
};

