import React from 'react';
import './MoviesCard.css';
//если не сохранено
const isSaved = false;

function MoviesCard({image, title, duration, savedMovies}) {
    return (
        <li className="card">
            {savedMovies ? <button className="card__delete-button"></button> : <button className={`card__save-button ${isSaved ? "card__save-button_active" : "card__save-button_inactive"}`}></button>}
            
            <img className="card__image" src={image} alt={title}/>
            <div className="card__row">
                <h2 className="card__title">{title}</h2>
                <p className="card__duration">{duration}</p>
            </div>
        </li>
    )
}

export default MoviesCard;