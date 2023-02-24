import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {Route} from "react-router-dom";
import {NewsFeed} from "./Components/Content/News/News_feed";
import {Music} from "./Components/Content/Music/Music";
import {Settings} from "./Components/Content/Settings/Settings";
import {NavbarContainer} from "./Components/Navbar/NavbarContainer";
import {DialogsContainer} from "./Components/Content/Dialogs/DialogsContainer";
import {ProfileContainer} from "./Components/Content/Profile/ProfileContainer";
import UsersPageContainer from "./Components/Content/UsersPage/UsersPageContainer";


function App() {

    return (
            <div className='app_wrapper'>
                <Header/>
                <NavbarContainer/>
                <div className='content_wrapper'>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile'} render={() => <ProfileContainer/>}/>
                    <Route path={'/users'} render={() => <UsersPageContainer/>}/>
                    <Route path={'/news_feed'} component={NewsFeed}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
                <Footer/>
            </div>
    );
}

export default App;
