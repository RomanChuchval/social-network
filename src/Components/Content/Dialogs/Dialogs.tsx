import React, {useRef} from 'react';
import style from './Dialogs.module.css'
import {DialogsList} from "./DialogsList";
import {MessageList} from "./MessageList";
import {DialogsPageType} from "../../../Redux/store";


type DialogsPropsType = {
    state: DialogsPageType
    addMessageAC: () => void
    updateMessageTextAC: (messageText: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const ref = useRef<HTMLInputElement>(null)

    const onClickHandler = () => ref.current !== null && props.addMessageAC()
    const onChangeHandler = () => ref.current !== null && props.updateMessageTextAC(ref.current.value)

    let dialogsList = props.state.dialogsList.map(d => <DialogsList key={d.id} id={d.id} name={d.name}
                                                                    avatar={d.avatar} isOnline={d.isOnline}/>)
    let messagesList = props.state.messagesList.map(m => <MessageList key={m.id} id={m.id} message={m.message}/>)

    return (
        <div className={style.dialogs_page}>
            <div className={style.dialogs_message_sender}>
                <input
                    onChange={onChangeHandler}
                    ref={ref}
                    value={props.state.newMessageText}
                    placeholder={'Type message...'}
                    className={style.dialogs_input}/>

                <button onClick={onClickHandler} className={style.dialogs_send_button}>Send</button>
            </div>
            <div className={style.dialogs_list}>
                {dialogsList}
            </div>
            <div className={style.messages_list}>
                {messagesList}
            </div>
        </div>
    );
};
