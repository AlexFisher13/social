import React from 'react';

const Navbar = () => {
    return (
        <div className="col-3 bg-dark2 navbar">
            <a className="row" href="profile">Profile</a>
            <a className="row" href="dialogs">Messages</a>
            <a className="row" href="news">News</a>
            <a className="row" href="music">Music</a>
            <a className="row" href="settings">Settings</a>
        </div>
    )
}
export default Navbar;