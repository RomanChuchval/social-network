import React from 'react';
import {StoreType} from "../../Redux/store";
import {Navbar} from "./Navbar";

type NavbarContainerPropsType = {
    store: StoreType
}

export const NavbarContainer = (props: NavbarContainerPropsType) => {
    let navbarState = props.store.getState().navbar

    return <Navbar navbarState={navbarState}/>
};

