import React from 'react';
import { useLocation } from "react-router-dom";
import './MoviesCard.css';
import {optionsApi} from '../../utils/MoviesApi'
import { convertDuration } from "../../utils/utils";

function MoviesCard({card, isSaved, onCardSave, onCardDelete}) {

    const location = useLocation();

    function handleSaveClick() {
        onCardSave(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    return (
        <li className="card">
            {location.pathname === "/saved-movies" ? <button className="card__delete-button" onClick={handleDeleteClick}></button> : <button className={`card__save-button ${isSaved ? "card__save-button_active" : "card__save-button_inactive"}`} onClick={isSaved ? handleDeleteClick : handleSaveClick}></button>}
            <a className="card__link"
                href={card.trailerLink}
                target="_blank"
                rel="noreferrer">            
                <img className="card__image" src={
                    location.pathname === "/movies"
                    ? `${optionsApi.url}${card.image.url}`
                    : `${card.image}`
                } alt={card.nameRU.trim()}/>
            </a>
            <div className="card__row">
                <h2 className="card__title">{card.nameRU.trim()}</h2>
                <p className="card__duration">{convertDuration(card.duration)}</p>
            </div>
        </li>
    )
}

export default MoviesCard;