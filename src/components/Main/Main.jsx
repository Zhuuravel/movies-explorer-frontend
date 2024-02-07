import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import React from 'react';
import './Main.css';

function Main() {
    return (
        <main className="content">
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </main>
    )
}

export default Main;