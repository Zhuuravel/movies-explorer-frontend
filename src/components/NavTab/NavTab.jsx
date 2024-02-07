import React from 'react';
import './NavTab.css'

function NavTab() {
    return (
        <section className="nav">
            <ul className="nav__list">
                <li><a className="nav__link" href="#about-project">О проекте</a></li>
                <li><a className="nav__link" href="#techs">Технологии</a></li>
                <li><a className="nav__link" href="#me">Студент</a></li>
            </ul>
        </section>
    )
}

export default NavTab;