import Login from '../Login/Login';
import React from 'react';

function Register({title, button, text, link, route}) {
    return (
        <Login title={title} button={button} text={text} link={link} route="/signin">
            <label htmlFor="input-name" className="auth__form-field">Имя
                <input type="name" className="auth__input auth__input_name" id="input-name" name="name"
                minLength="2" maxLength="200" required/>
            </label>
        </Login>
    )
}

export default Register;