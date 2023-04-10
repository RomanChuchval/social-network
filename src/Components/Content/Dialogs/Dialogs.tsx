import React, {ComponentType} from 'react';
import style from './Dialogs.module.css'
import {DialogsList} from "./DialogsList";
import {MessageList} from "./MessageList";
import {addMessageAC, DialogsPageType} from "../../../Redux/dialogs-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import {withAuthRedirect} from "../../../Hoc/withAuthRedirect";
import {connect} from "react-redux";
import {compose} from "redux";
import {MessageSendForm} from "./MessageSendForm";

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsList = props.state.dialogsList.map(d => <DialogsList key={d.id} id={d.id} name={d.name}
                                                                    avatar={d.avatar} isOnline={d.isOnline}/>)
    let messagesList = props.state.messagesList.map(m => <MessageList key={m.id} id={m.id} message={m.message}/>)

    return (
        <div className={style.dialogs_page}>
           <MessageSendForm addPost={props.addMessageAC} />
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
    addMessageAC: (message: string) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.dialogsPage,
    }
}


export default compose<ComponentType>(
    connect(mapStateToProps, {addMessageAC}),
    withAuthRedirect
)(Dialogs)

// const dialogsWithRedirect = withAuthRedirect(Dialogs)
// export const DialogsContainer = connect(mapStateToProps,
//     {addMessageAC, updateMessageTextAC})(dialogsWithRedirect)
