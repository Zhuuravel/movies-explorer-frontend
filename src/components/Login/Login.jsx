import React from 'react';
import { Link } from "react-router-dom";
import './Login.css';
const errorInput = false;

function Login({title, button, text, link, route, children}) {
    return (
        <main className="content-login">
            <form className="auth" name="info-register">
                <fieldset className="auth__fieldset">
                    <h2 className="auth__title">{title}</h2>
                    {children}
                    <label htmlFor="input-email" className="auth__form-field">E-mail
                        <input type="email" className="auth__input auth__input_email" id="input-email" name="email"
                        required/>
                    </label>
                    <label htmlFor="input-password" className="auth__form-field">Пароль
                        <input type="password" className="auth__input auth__input_password" id="input-password" name="password"
                        minLength="2" maxLength="200" required/>
                    </label>
                    <span className={`auth__form-error ${errorInput ? "auth__form-error_active" : ""}`}>Что-то пошло не так...</span>
                </fieldset>
                <fieldset className="auth__fieldset">
                    <button className={`auth__submit-button ${errorInput ? "auth__submit-button_disabled" : ""}`} aria-label={button}>{button}</button>
                    <p className="auth__text">{text}<Link className="auth__link" to={route}>{link}</Link></p>
                </fieldset>
            </form>
        </main>
    )
}

export default Login;