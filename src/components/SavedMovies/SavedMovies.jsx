import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import './SavedMovies.css'

function SavedMovies() {
    return (
        <main className="saved">
            <SearchForm />
            <Preloader />
            <MoviesCardList savedMovies/>
            <button className="saved-movies__more">Ещё</button>
        </main>
    )
}

export default SavedMovies;