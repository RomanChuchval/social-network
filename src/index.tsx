import React from 'react';
import './index.css';
import App from './App';
import {StateType} from './Redux/store'
import store from './Redux/redux-store'
import ReactDOM from "react-dom";


const rerenderApp = (state: StateType) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
};


rerenderApp(store.getState())

store.subscribe(()=>{
    rerenderApp(store.getState())
})
