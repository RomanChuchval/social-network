import React from 'react';
import './App.css';
import {Profile} from "./Components/Content/Profile";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Footer} from "./Components/Footer/Footer";
import {Dialogs} from "./Components/Content/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {NewsFeed} from "./Components/Content/News/News_feed";
import {Music} from "./Components/Content/Music/Music";
import {Settings} from "./Components/Content/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <div className='content_wrapper'>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/dialogs'} component={Dialogs}/>
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
