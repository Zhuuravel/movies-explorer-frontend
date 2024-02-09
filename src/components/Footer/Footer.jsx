import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__line"></div>
            <div className="footer__text">
                <p className="footer__copyright footer__copyright_grey">© 2020</p>
                <ul className="footer__row">
                    <li className="footer__content">
                        <p className="footer__copyright">Яндекс.Практикум</p>
                    </li>
                    <li className="footer__content">
                        <p className="footer__copyright">Github</p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;