import React from 'react';
import { Link } from "react-router-dom";
// import useFormValidation from "../../hooks/useFormValidation";
import './AuthForm.css';

function AuthForm({title, button, text, link, route, handleSubmit, values, errors, isValid, onChange, children}) {

    // const { values, errors, isValid, onChange } = useFormValidation();

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     onLogin(values);
    // }

    return (
        <main className="auth">
            <form className="auth__form" name="info-auth" onSubmit={handleSubmit}>
                <fieldset className="auth__fieldset">
                    <h2 className="auth__title">{title}</h2>
                    {children}
                    <label htmlFor="input-email" className="auth__form-field">E-mail
                        <input type="email" className={`auth__input auth__input_email ${errors.email && "auth__input_type_error"}`} id="input-email" name="email" value={values.email || ""} onChange={onChange}
                        required/>
                    </label>
                    <label htmlFor="input-password" className="auth__form-field">Пароль
                        <input type="password" className={`auth__input auth__input_password ${errors.password && "auth__input_type_error"}`} id="input-password" name="password" value={values.password || ""} onChange={onChange}
                        minLength="2" maxLength="200" required/>
                    </label>
                    <div className={`auth__errors ${(errors.name || errors.email || errors.password) && "auth__errors_active"}`}>
                            <span className={`auth__input-error ${errors.name && "auth__input-error_active"}`}>{`Имя: ${errors.name || ""}`}</span>
                            <span className={`auth__input-error ${errors.email && "auth__input-error_active"}`}>{`E-mail: ${errors.email || ""}`}</span>
                            <span className={`auth__input-error ${errors.password && "auth__input-error_active"}`}>{`Пароль: ${errors.password || ""}`}</span>
                    </div>
                </fieldset>
                <fieldset className="auth__fieldset">
                    <button className={`auth__submit-button ${!isValid && "auth__submit-button_disabled"}`} aria-label={button}>{button}</button>
                    <p className="auth__text">{text}<Link className="auth__link" to={route}>{link}</Link></p>
                </fieldset>
            </form>
        </main>
    )
}

export default AuthForm;