import React from 'react';
import { Navigate } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";
import AuthForm from '../AuthForm/AuthForm';

const errorInput = "^[A-Za-zА-Яа-яЁё\\-\\s]+$";

function Register({onLoading, title, text, link, handleRegistration, route, isLoggedIn}) {

    const { values, errors, isValid, onChange } = useFormValidation();

    function handleSubmit(e) {
        e.preventDefault();
        handleRegistration(values);
    }

    return isLoggedIn ? (
        <Navigate to="/" replace />
      ) : (  
        <AuthForm 
        title ={title}
        button={onLoading ? "Регистрация ..." : "Зарегистрироваться"}
        text={text}
        link={link}
        route={route}
        handleSubmit={handleSubmit}
        values={values}
        errors={errors}
        isValid={isValid}
        onChange={onChange}
        >
            <label htmlFor="input-name" className="auth__form-field">Имя
                <input type="name" className={`auth__input auth__input_name ${errors.name && "auth__input_type_error"}`} id="input-name" name="name" value={values.name || ""} onChange={onChange}
                minLength="2" maxLength="200" pattern={errorInput} required/>
            </label>
        </AuthForm>
    )
}

export default Register;