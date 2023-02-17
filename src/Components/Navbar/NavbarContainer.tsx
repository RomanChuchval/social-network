import React from 'react';
import {StoreType} from "../../Redux/store";
import {Navbar} from "./Navbar";
import {StoreContext} from "../../StoreContext";

type NavbarContainerPropsType = {
    store: StoreType
}

export const NavbarContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                if (store !== null) {
                    let navbarState = store.getState().navbar
                    return <Navbar navbarState={navbarState}/>
                }
            }}
        </StoreContext.Consumer>

    )
};

