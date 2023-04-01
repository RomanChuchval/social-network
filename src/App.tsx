import React from 'react';
import './App.css';
import {Footer} from "./Components/Footer/Footer";
import {Route} from "react-router-dom";
import {NewsFeed} from "./Components/Content/News/News_feed";
import {Music} from "./Components/Content/Music/Music";
import {Settings} from "./Components/Content/Settings/Settings";
import {NavbarContainer} from "./Components/Navbar/NavbarContainer";
import UsersPageContainer from "./Components/Content/UsersPage/UsersPageContainer";
import ProfileContainerWithUrlInfo from "./Components/Content/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";
import {DialogsContainer} from "./Components/Content/Dialogs/Dialogs";


function App() {

    return (
        <div className='app_wrapper'>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='content_wrapper'>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile/:userId'} render={() => <ProfileContainerWithUrlInfo/>}/>
                <Route exact path={'/profile/'} render={() => <ProfileContainerWithUrlInfo/>}/>
                <Route path={'/users'} render={() => <UsersPageContainer/>}/>
                <Route path={'/news_feed'} component={NewsFeed}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
                <Route path={'/login'} component={Login}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
