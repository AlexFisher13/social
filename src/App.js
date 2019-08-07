import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Pages/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/Pages/News";
import Music from "./components/Pages/Music";
import Settings from "./components/Pages/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="App container">
                <Header/>
                <div className="row">
                    <Navbar/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
