import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, StateType} from "./Redux/state";


export const rerenderApp = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
};

