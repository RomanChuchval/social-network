import React from 'react';
import './App.css';
import {Content} from "./Components/Content/Content";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Footer} from "./Components/Footer/Footer";


function App() {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar />
            <Content/>
            <Footer />
        </div>
    );
}

export default App;
