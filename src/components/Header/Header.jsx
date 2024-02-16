import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css'

//для смены навигационной панели используется стэйт isLoggedIn
function Header({isLoggedIn, isMainPage, withoutNavigate, isNavListPopupOpen, onOpen, onClose}) {
    return (
        <header className={`header ${withoutNavigate? "header_without-nav" : ""} ${isMainPage? "header_main" : ""}`}>
            <NavLink className="header__link" to="/"><img className="header__logo" src={logo} alt="логотип"/></NavLink>
            {!withoutNavigate ?
            <Navigation isLoggedIn={isLoggedIn} isMainPage={isMainPage} isNavListPopupOpen={isNavListPopupOpen} onOpen={onOpen} onClose={onClose} /> : <></>}
        </header>
    )
}

export default Header;
