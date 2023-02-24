import React from 'react';
import {Navbar} from "./Navbar";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {NavbarType} from "../../Redux/navbar-reducer";
import {Dispatch} from "redux";


// export const NavbarContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 if (store !== null) {
//                     let navbarState = store.getState().navbar
//                     return <Navbar navbarState={navbarState}/>
//                 }
//             }}
//         </StoreContext.Consumer>
//
//     )
// };
export type NavbarPropsType = mapStatePropsType

export type mapStatePropsType = {
    navbarState: NavbarType[]
}

export const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        navbarState: state.navbar
    }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {

    }
}


export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps )(Navbar)

