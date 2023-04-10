import React, {useEffect} from 'react';
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
import Dialogs from "./Components/Content/Dialogs/Dialogs";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Redux/redux-store";
import {setUserAuthTC} from "./Redux/auth-reducer";
import Loader from "./Components/Common/Loader/Loader";


function App() {

    const dispatch = useDispatch()
    const initializationApp = useSelector<AppStateType, boolean>(state => state.userAuth.initialization)

    useEffect(() => {
        dispatch(setUserAuthTC())
    }, [])

    return (
        <div className={`${initializationApp ? `app_initialization_wrapper` : `app_wrapper`}`}>
            {initializationApp
                ? <div className='app_initialization_wrapper'>
                    <div>Wait a second ;)</div>
                    <Loader/>
                </div>
                : <>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className='content_wrapper'>
                        <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                        <Route path={'/profile/:userId'} render={() => <ProfileContainerWithUrlInfo/>}/>
                        <Route exact path={`/profile`} render={() => <ProfileContainerWithUrlInfo/>}/>
                        <Route path={'/users'} render={() => <UsersPageContainer/>}/>
                        <Route path={'/news_feed'} component={NewsFeed}/>
                        <Route path={'/music'} component={Music}/>
                        <Route path={'/settings'} component={Settings}/>
                        <Route path={'/login'} component={Login}/>
                    </div>
                    <Footer/>
                </>}
        </div>
    );
}

export default App;
