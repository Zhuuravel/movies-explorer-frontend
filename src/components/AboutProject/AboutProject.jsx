import React from 'react';
import './AboutProject.css'

function AboutProject() {
    return (
        <section className="about" id="about-project">
            <h2 className="main__title">О проекте</h2>
            <div className="main__line"></div>
            <ul className="about__row">
                <li className="about__column">
                    <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="about__column">
                    <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="term__table">
                <div className="term__line term__line_black">
                    <h3 className="term__title">1 неделя</h3>
                </div>
                <div className="term__line term__line_grey">
                    <h3 className="term__title">4 недели</h3>
                </div>
                <p className="term__description">Back-end</p>
                <p className="term__description">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;