import React from 'react';
import {addMessageAC, updateMessageTextAC} from "../../../Redux/dialogs-reducer";
import {StoreType} from "../../../Redux/store";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../../StoreContext";


type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                if (store !== null) {
                    let dialogsPageState = store.getState().dialogsPage
                    const onAddMessageAC = () => store.dispatch(addMessageAC())
                    const onUpdateMessageTextAC = (messageText: string) => store.dispatch(updateMessageTextAC(messageText))

                    return <Dialogs state={dialogsPageState}
                                    addMessageAC={onAddMessageAC}
                                    updateMessageTextAC={onUpdateMessageTextAC}/>
                }}}
        </StoreContext.Consumer>
    )


};
