import React, {useRef} from 'react';
import style from './Dialogs.module.css'
import {DialogsList} from "./DialogsList";
import {MessageList} from "./MessageList";
import {addMessageAC, DialogsPageType, updateMessageTextAC} from "../../../Redux/dialogs-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import {withAuthRedirect} from "../../../Hoc/withAuthRedirect";
import {connect} from "react-redux";

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


// =========== CONTAINER =========== //


export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

export type MapStatePropsType = {
    state: DialogsPageType
}

export type MapDispatchPropsType = {
    addMessageAC: () => void
    updateMessageTextAC: (messageText: string) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.dialogsPage,
    }
}

const dialogsWithRedirect = withAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps,
    {addMessageAC, updateMessageTextAC})(dialogsWithRedirect)
