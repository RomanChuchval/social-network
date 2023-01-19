import React from 'react';
import style from './Dialogs.module.css'
import {DialogsList} from "./DialogsList";
import {MessageList} from "./MessageList";
import {v1} from "uuid";

export const Dialogs = () => {

    let dialogsListData = [
        {id: v1(), name: 'Roman'},
        {id: v1(), name: 'Lera'},
        {id: v1(), name: 'Valera'},
        {id: v1(), name: 'Natasha'},
        {id: v1(), name: 'Victor'},
    ]

    let messagesData = [
        {id: v1(), message: 'React'},
        {id: v1(), message: 'Redux'},
        {id: v1(), message: 'HTML'},
        {id: v1(), message: 'JavaScript'},
        {id: v1(), message: 'TypeScript'},
        {id: v1(), message: 'MaterialUI'},
    ]

    let dialogsList = dialogsListData.map(d => <DialogsList key={d.id} id={d.id} name={d.name} />)
    let messagesList = messagesData.map(m => <MessageList key={m.id} id={m.id} message={m.message} /> )

    return (
        <div className={style.dialogs_page}>
            <div className={style.dialogs_list}>
                {dialogsList}
            </div>
            <div className={style.messages_list}>
                {messagesList}
            </div>
        </div>
    );
};
