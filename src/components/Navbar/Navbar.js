import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className="col-3 bg-dark2 navbar">
            <NavLink to="/profile" className="row" activeClassName={s.active}>Profile</NavLink>
            <NavLink to="/dialogs" className="row" activeClassName={s.active}>Messages</NavLink>
            <NavLink to="/news" className="row" activeClassName={s.active}>News</NavLink>
            <NavLink to="/music" className="row" activeClassName={s.active}>Music</NavLink>
            <NavLink to="/settings" className="row" activeClassName={s.active}>Settings</NavLink>
        </div>
    )
}
export default Navbar;