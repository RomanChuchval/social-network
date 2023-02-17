import React from 'react';
import {addMessageAC, updateMessageTextAC} from "../../../Redux/dialogs-reducer";
import {StoreType} from "../../../Redux/store";
import {Dialogs} from "./Dialogs";


type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    let dialogsPageState = props.store.getState().dialogsPage

    const onAddMessageAC = () => props.store.dispatch(addMessageAC())
    const onUpdateMessageTextAC = (messageText: string) => props.store.dispatch(updateMessageTextAC(messageText))


    return <Dialogs state={dialogsPageState}
                    addMessageAC={onAddMessageAC}
                    updateMessageTextAC={onUpdateMessageTextAC}

    />
};
