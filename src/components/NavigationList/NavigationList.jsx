import profileLogo from '../../images/profile-logo.svg';
import React from 'react';
import './NavigationList.css';
import { NavLink } from "react-router-dom";

function NavigationList({isLoggedIn, isNavListPopupOpen, onOpen, onClose}) {
    return (
        <section className="navigation-list">
            {isLoggedIn ? <button className="navigation-list__button" type="button" onClick={onOpen}></button> : <></>}
            <div className={`navigation-list__popup ${isNavListPopupOpen ? "navigation-list__popup_opened" : ""}`}>
                    <nav className="navigation-list__links">
                        <button className="navigation-list__button-close" type="button" onClick={onClose}></button>
                        <NavLink className={({isActive}) => `navigation-list__link ${isActive ? "navigation-list__link_active" : ""}`} to="/" onClick={onClose}>Главная</NavLink>
                        <NavLink className={({isActive}) => `navigation-list__link ${isActive ? "navigation-list__link_active" : ""}`} to="/movies" onClick={onClose}>Фильмы</NavLink>
                        <NavLink className={({isActive}) => `navigation-list__link ${isActive ? "navigation-list__link_active" : ""}`} to="/saved-movies" onClick={onClose}>Сохранённые фильмы</NavLink>
                        <NavLink className={({isActive}) => `navigation-list__link ${isActive ? "navigation-list__link_active" : ""}`} to="/profile" onClick={onClose}>
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