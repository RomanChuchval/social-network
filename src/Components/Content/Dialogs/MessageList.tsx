import React from 'react';
import style from './MessageList.module.css'
type MessageListType = {
    message: string
}
export const MessageList = (props: MessageListType) => {

    return (
        <div className={style.message}>
            {props.message}
        </div>
    );
};

