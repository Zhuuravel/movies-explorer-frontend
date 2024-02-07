import profileLogoMain from '../../images/profile-logo-main.svg';
import profileLogo from '../../images/profile-logo.svg';
import React from 'react';
import NavigationList from '../NavigationList/NavigationList';
import { NavLink } from "react-router-dom";
import './Navigation.css'
const isActive = false;

function Navigation({isLoggedIn, isMainPage}) {
    return (
        <nav className="navigate">
            {isLoggedIn ?
                ( window.innerWidth <=1279 ? <NavigationList isLoggedIn={isLoggedIn} isMainPage={isMainPage}/> :
                <>
                    <NavLink className={` navigate__link ${isActive ? 'navigate__link_active' : ''}`} to="/movies">Фильмы</NavLink>
                    <NavLink className={` navigate__link ${isActive ? 'navigate__link_active' : ''}`} to="/saved-movies">Сохранённые фильмы</NavLink>
                    <NavLink className="navigate__link"  to="/profile">
                        <p className="navigate__profile-title">Аккаунт</p>
                        <div className={`navigate__profile ${isMainPage && "navigate__profile_main"}`}>
                            <img className="navigate__profile-logo" src={isMainPage ? profileLogoMain : profileLogo} alt="логотип профиля"/>
                        </div>
                    </NavLink>
                </>) :
                <>
                    <NavLink className="navigate__link" to="/signup">Регистрация</NavLink>
                    <NavLink className="navigate__login-link" to="/signin">Войти</NavLink>
                </>}
        </nav>
    )
}

export default Navigation;