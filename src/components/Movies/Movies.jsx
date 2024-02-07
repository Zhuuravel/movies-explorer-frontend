import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React from 'react';
import './Movies.css';

function Movies() {
    return (
        <section className="movies">
            <SearchForm />
            <Preloader />
            <MoviesCardList />
            <button className="movies__more">Ещё</button>
        </section>
    )
}

export default Movies;