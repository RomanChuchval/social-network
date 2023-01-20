import React from 'react';
import style from './Dialogs.module.css'
import {DialogsList} from "./DialogsList";
import {MessageList} from "./MessageList";
import {DialogsPageType} from "../../../Redux/state";


type DialogsPropsType = {
   state: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsList = props.state.dialogsList.map(d => <DialogsList key={d.id} id={d.id} name={d.name}/>)
    let messagesList = props.state.messagesList.map(m => <MessageList key={m.id} id={m.id} message={m.message}/>)

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
