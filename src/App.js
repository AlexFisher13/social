import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div className="App container">
        <Header />
        <div className="row">
            <Navbar />
            {/*<Profile />*/}
            <Dialogs/>
        </div>
    </div>
  );
}

export default App;
