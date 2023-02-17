import React from 'react';
import './index.css';
import App from './App';
import {StoreType} from './Redux/store'
import store from './Redux/redux-store'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {StoreContext} from "./StoreContext";


const rerenderApp = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter> ,
        document.getElementById('root')
    );
};

rerenderApp(store)

store.subscribe(()=>{
    rerenderApp(store)
})
