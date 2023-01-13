import React from 'react';
import style from './Dialogs.module.css'
import {DialogsList} from "./DialogsList";
import {MessageList} from "./MessageList";

export const Dialogs = () => {
    return (
        <div className={style.dialogs_page}>
            <div className={style.dialogs_list}>
                <DialogsList id={'1'} name={'Roman'} />
                <DialogsList id={'2'} name={'Lera'} />
                <DialogsList id={'3'} name={'Dima'} />
                <DialogsList id={'4'} name={'Sergey'} />
                <DialogsList id={'5'} name={'Oleg'} />
            </div>
            <div className={style.messages_list}>
                <MessageList message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore laboriosam nam similique!'} />
                <MessageList message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
                <MessageList message={'Lorem ipsum dolor sit amet.'} />
                <MessageList message={'Yo'} />
                <MessageList message={'Hey!'} />

            </div>
        </div>
    );
};
