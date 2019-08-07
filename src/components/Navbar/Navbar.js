import React from 'react';

const Navbar = () => {
    return (
        <div className="col-3 bg-dark2 navbar">
            <div className="row">
                <a href="profile">Profile</a>
            </div>
            <div className="row">
                <a href="dialogs">Messages</a>
            </div>
            <div className="row">
                <a href="news">News</a>
            </div>
            <div className="row">
                <a href="music">Music</a>
            </div>
            <div className="row">
                <a href="settings">Settings</a>
            </div>
        </div>
    )
}
export default Navbar;