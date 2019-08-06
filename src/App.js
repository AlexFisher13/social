import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App container">
        <Header className="Header" />
        <div className="row">
            <Navbar className="Navbar" />
            <Profile className="Profile" />
        </div>
    </div>
  );
}

export default App;
