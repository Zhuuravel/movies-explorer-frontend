import React from 'react';
import {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormValidation from "../../hooks/useFormValidation";
import './Profile.css';

const errorInput = "^[A-Za-zА-Яа-яЁё\\-\\s]+$";

function Profile({title, onUpdateUser, onLogout, onLoading, loggedIn}) {

    const currentUser = useContext(CurrentUserContext);
    
    const { values, errors, isValid, onChange, resetValidation } = useFormValidation();

    const [isSameValue, setValue] = useState(true); //то же значение введенных данных, что и исходное
    const [editProfile, setEditProfile] = useState(false); //режим редактирования профиля
    
    useEffect(() => {
        currentUser.name !== values.name || currentUser.email !== values.email
          ? setValue(false)
          : setValue(true);
      }, [currentUser, values]);

      useEffect(() => {
        resetValidation(false, currentUser);
      }, [resetValidation, currentUser]);

    const handleEditClick = () => {
        setEditProfile(!editProfile);
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateUser(values);
        setEditProfile(!editProfile);
      }

    return (
        <main className="profile">
            <h2 className="profile__title">{title}</h2>
            <form className="profile__form" name="info-register" onSubmit={handleSubmit}>
                <fieldset className="profile__fieldset">
                    <label htmlFor="input-name" className="profile__form-field">Имя
                        <input type="text" className={`profile__input profile__input_name ${errors.name && "profile__input_type_error"}`} id="input-name" name="name" value={values.name || ""} onChange={onChange} disabled={editProfile ? false : true}
                        required minLength="2" maxLength="30" pattern={errorInput}/>
                    </label>
                    <label htmlFor="input-email" className="profile__form-field">E-mail
                        <input type="email" className={`profile__input profile__input_email ${errors.email && "profile__input_type_error"}`} id="input-email" name="email" value={values.email || ""} onChange={onChange} disabled={editProfile ? false : true}
                        required/>
                    </label>
                </fieldset>
                <fieldset className="profile__fieldset">
                    {!editProfile ? 
                    <>
                        <button className="profile__edit-button" aria-label="Редактировать" onClick={handleEditClick}>Редактировать</button>
                        <Link className="profile__link" onClick={onLogout}>Выйти из аккаунта</Link>
                    </> : 
                    <>
                        <div className={`profile__errors ${(errors.name || errors.email) && "profile__errors_active"}`}>
                            <span className={`profile__input-error ${errors.name && "profile__input-error_active"}`}>{`Имя: ${errors.name || ""}`}</span>
                            <span className={`profile__input-error ${errors.email && "profile__input-error_active"}`}>{`E-mail: ${errors.email || ""}`}</span>
                        </div>
                        <button className={`profile__submit-button ${!isValid && isSameValue && "profile__submit-button_disabled"}`} aria-label="Сохранить" disabled={isValid && !isSameValue ? false : true} onClick={onUpdateUser}>{!onLoading? "Сохранить" : "Сохранение ..."}</button>
                    </>}
                </fieldset>             
            </form>
        </main>
    )
}

export default Profile;