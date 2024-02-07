import React from 'react';
import movie1 from '../../images/movie1.png';
import movie2 from '../../images/movie2.png';
import movie3 from '../../images/movie3.png';
import movie4 from '../../images/movie4.png';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';


const initialCards = [
    {
        image: movie1,
        title: "33 слова о дизайне",
        duration: "1ч 17м"
    },
    {
        image: movie2,
        title: "Киноальманах «100 лет дизайна»",
        duration: "1ч 17м"
    },
    {
        image: movie3,
        title: "В погоне за Бенкси",
        duration: "1ч 17м"
    },
    {
        image: movie4,
        title: "Баския: Взрыв реальности",
        duration: "1ч 17м"
    },
]

function MoviesCardList({savedMovies}) {
    return (
        <section className="cards">
            <ul className="card__list">
                {initialCards.map((item) => {
                    return (
                        <MoviesCard 
                            image={item.image} 
                            title={item.title} 
                            duration={item.duration} 
                            key={initialCards.indexOf(item)}
                            savedMovies={savedMovies}/>
                    )
                })}
            </ul>
        </section>
    )
}

export default MoviesCardList;