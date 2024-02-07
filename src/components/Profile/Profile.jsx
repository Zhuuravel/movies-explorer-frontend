import React from 'react';
import { Link } from "react-router-dom";
import './Profile.css';
const nameValue = "Лиза";
const emailValue = "test@test.ru";

const errorInput = true;
const editProfile = true;

function Profile({title}) {
    return (
        <main className="content-profile">
            <h2 className="profile__title">{title}</h2>
            <form className="profile" name="info-register">
                <fieldset className="profile__fieldset">
                    <label htmlFor="input-name" className="profile__form-field">Имя
                        <input type="text" className="profile__input profile__input_name" id="input-name" name="name" value={nameValue}
                        required/>
                    </label>
                    <label htmlFor="input-email" className="profile__form-field">E-mail
                        <input type="email" className="profile__input profile__input_email" id="input-email" name="email" value={emailValue}
                        required/>
                    </label>
                </fieldset>
                <fieldset className="profile__fieldset">
                    {editProfile ? 
                    <>
                        <button className="profile__edit-button" aria-label="Редактировать">Редактировать</button>
                        <Link className="profile__link" to="/signin">Выйти из аккаунта</Link>
                    </> : 
                    <>
                        <span className={`profile__form-error ${errorInput ? "profile__form-error_active" : ""}`}>При обновлении профиля произошла ошибка.</span>
                        <button className={`profile__submit-button ${errorInput ? "profile__submit-button_disabled" : ""}`} aria-label="Сохранить">Сохранить</button>
                    </>}
                </fieldset>             
            </form>
        </main>
    )
}

export default Profile;