import profileLogoMain from '../../images/profile-logo-main.svg';
import profileLogo from '../../images/profile-logo.svg';
import React from 'react';
import NavigationList from '../NavigationList/NavigationList';
import { NavLink } from "react-router-dom";
import {useEffect, useState} from "react";
import './Navigation.css';

function Navigation({isLoggedIn, isMainPage, isNavListPopupOpen, onOpen, onClose}) {

    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setCurrentWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <nav className="navigate">
            {isLoggedIn ?
                ( currentWidth <=1279 ? <NavigationList isLoggedIn={isLoggedIn} isMainPage={isMainPage} isNavListPopupOpen={isNavListPopupOpen} onOpen={onOpen} onClose={onClose} /> :
                <>
                    <NavLink className={({isActive}) => `navigate__link navigate__link ${isActive ? "navigate__link_active" : ""}`} to="/movies">Фильмы</NavLink>
                    <NavLink className={({isActive}) => `navigate__link navigate__link ${isActive ? "navigate__link_active" : ""}`} to="/saved-movies">Сохранённые фильмы</NavLink>
                    <NavLink className={({isActive}) => `navigate__link navigate__link ${isActive ? "navigate__link_active" : ""}`}  to="/profile">
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
