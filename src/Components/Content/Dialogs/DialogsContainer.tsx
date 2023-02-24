import React from 'react';
import {addMessageAC, DialogsPageType, updateMessageTextAC} from "../../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../Redux/redux-store";

// type DialogsContainerPropsType = {
//     store: StoreType
// }

// export const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 if (store !== null) {
//                     let dialogsPageState = store.getState().dialogsPage
//                     const onAddMessageAC = () => store.dispatch(addMessageAC())
//                     const onUpdateMessageTextAC = (messageText: string) => store.dispatch(updateMessageTextAC(messageText))
//
//                     return <Dialogs state={dialogsPageState}
//                                     addMessageAC={onAddMessageAC}
//                                     updateMessageTextAC={onUpdateMessageTextAC}/>
//                 }}}
//         </StoreContext.Consumer>
//     )
// };

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

export type MapStatePropsType = {
    state: DialogsPageType
}

export type MapDispatchPropsType = {
    addMessageAC: () => void
    updateMessageTextAC: (messageText: string) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType  => {
    return {
        state: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessageAC: () => dispatch(addMessageAC()),
        updateMessageTextAC: (messageText: string) => dispatch(updateMessageTextAC(messageText))
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps )(Dialogs)
