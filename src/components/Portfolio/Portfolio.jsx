import React from 'react';
import './Portfolio.css';

//Статичного сайта и одностраничного приложения пока ещё нет в gh pages
function AboutMe() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__element">
                    <a className="portfolio__link" href="https://zhuuravel.github.io/russian-travel/index.html" target="_blank" rel="noreferrer">
                        <h3 className="portfolio__name">Статичный сайт</h3>
                        <div className="portfolio__arrow"></div>
                    </a>
                    <div className="portfolio__line"></div>
                </li>
                <li className="portfolio__element">
                    <a className="portfolio__link" href="https://zhuuravel.github.io/russian-travel/index.html" target="_blank" rel="noreferrer">
                        <h3 className="portfolio__name">Адаптивный сайт</h3>
                        <div className="portfolio__arrow"></div>
                    </a>
                    <div className="portfolio__line"></div>
                </li>
                <li className="portfolio__element">
                    <a className="portfolio__link" href="https://zhuuravel.github.io/russian-travel/index.html" target="_blank" rel="noreferrer">
                        <h3 className="portfolio__name">Одностраничное приложение</h3>
                        <div className="portfolio__arrow"></div>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default AboutMe;