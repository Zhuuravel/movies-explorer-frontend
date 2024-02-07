import React from 'react';
import photo from '../../images/me.jpg'
import './AboutMe.css'

function AboutMe() {
    return (
        <section className="me" id="me">
            <h2 className="main__title">Студент</h2>
            <div className="main__line"></div>
            <div className="me__row">
                <div className="me__column">
                    <h3 className="me__name">Лиза</h3>
                    <p className="me__speciality">Фронтенд-разработчик, 22 года</p>
                    <p className="me__description">Я из Йошкар-Олы, закончила факультет информатики и вычислительной техники ПГТУ. 
                     Я люблю рисовать, а ещё увлекаюсь силовыми тренировками и плаванием. Начала кодить ещё в универе. 
                    С 2022 года работала над фриланс-заказами по оцифровке чертежей в AutoCAD, занималась репетиторством и решением заданий по МатАнализу. 
                    После того, как прошла курс по веб-разработке, больше занимаюсь кодингом и планирую дальше развиваться и работать в этой сфере.</p>
                    <a className="me__link" href="https://github.com/Zhuuravel/" target="_blank" rel="noreferrer">Github</a>
                </div>
                <img className="me__photo" src={photo} alt="фото студента"/>
            </div>
        </section>
    )
}

export default AboutMe;