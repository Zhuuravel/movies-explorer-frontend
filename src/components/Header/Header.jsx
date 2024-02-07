import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css'

//для смены навигационной панели используется стэйт isLoggedIn
function Header({isLoggedIn, isMainPage, withoutNavigate}) {
    return (
        <header className={`header ${withoutNavigate? "header_without-nav" : ""} ${isMainPage? "header_main" : ""}`}>
            <NavLink className="header__logo-link" to="/"><img className="header__logo" src={logo} alt="логотип"/></NavLink>
            {!withoutNavigate ? 
            <Navigation isLoggedIn={isLoggedIn} isMainPage={isMainPage}/> : <></>}
        </header>
    )
}

export default Header;