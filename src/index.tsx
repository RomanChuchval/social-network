import React from 'react';
import './index.css';
import App from './App';
import {StoreType} from './Redux/store'
import store from './Redux/redux-store'
import ReactDOM from "react-dom";


const rerenderApp = (store: StoreType) => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
};


rerenderApp(store)

store.subscribe(()=>{
    rerenderApp(store)
})
