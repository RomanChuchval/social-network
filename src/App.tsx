import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import {NewsFeed} from "./Components/Content/News/News_feed";
import {Music} from "./Components/Content/Music/Music";
import {Settings} from "./Components/Content/Settings/Settings";
import {StoreType} from "./Redux/store";
import {NavbarContainer} from "./Components/Navbar/NavbarContainer";
import {DialogsContainer} from "./Components/Content/Dialogs/DialogsContainer";
import {ProfileContainer} from "./Components/Content/ProfileContainer";


type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <NavbarContainer store={props.store}/>
                <div className='content_wrapper'>
                    <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path={'/profile'} render={() => <ProfileContainer store={props.store}/>}/>
                    <Route path={'/news_feed'} component={NewsFeed}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
