import React from 'react';

const Header = () => {
    return (
        <div className="row bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="">Главная<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Новости</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Закладки</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Header;