import profileLogo from '../../images/profile-logo.svg';
import React from 'react';
import './NavigationList.css';
import { NavLink } from "react-router-dom";
const isActive = false;
const isNavListPopupOpen = false;

function NavigationList({isLoggedIn, isMainPage}) {
    return (
        <section className="navigation-list">
            {(isMainPage || isLoggedIn) ? <button className="navigation-list__button" type="button"></button> : <></>}
            <div className={`navigation-list__popup ${isNavListPopupOpen ? "navigation-list__popup_opened" : ""}`}>
                    <nav className="navigation-list__links">
                        <button className="navigation-list__button-close" type="button"></button>
                        <NavLink className={`navigation-list__link ${isActive ? 'navigation-list__link_active' : ''}`} to="/">Главная</NavLink>
                        <NavLink className={`navigation-list__link ${isActive ? 'navigation-list__link_active' : ''}`} to="/movies">Фильмы</NavLink>
                        <NavLink className={`navigation-list__link ${isActive ? 'navigation-list__link_active' : ''}`} to="/saved-movies">Сохранённые фильмы</NavLink>
                        <NavLink className={`navigation-list__link ${isActive ? 'navigation-list__link_active' : ''}`} to="/profile">
                            <p className="navigation-list__profile-title">Аккаунт</p>
                            <div className="navigation-list__profile">
                                <img className="navigate__profile-logo" src={profileLogo} alt="логотип профиля"/>
                            </div>
                    </NavLink>
                    </nav>  
            </div>
        </section>
    )
}

export default NavigationList;