import React from 'react';
import useFormValidation from "../../hooks/useFormValidation";
import AuthForm from '../AuthForm/AuthForm';

function Login({onLoading, title, text, link, route, handleLogin}) {

    const { values, errors, isValid, onChange } = useFormValidation();

    function handleSubmit(e) {
        e.preventDefault();
        handleLogin(values);
    }

    return (
        <AuthForm 
        title ={title}
        button={onLoading ? "Вход ..." : "Войти"}
        text={text}
        link={link}
        route={route}
        handleSubmit={handleSubmit}
        values={values}
        errors={errors}
        isValid={isValid}
        onChange={onChange}
        />
    )
}

export default Login;