import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React from 'react';
import {useEffect, useState, useCallback} from "react";
import useResize from "../../hooks/useResize";
import './Movies.css';
import { handleMovieFiltering, handleMovieSearch } from "../../utils/utils";

const cardsRender = {
    desktop: {
      width: 1280,
      cards: {
        total: 12,
        more: 3,
      },
    },
    tablet: {
      width: 768,
      cards: {
        total: 8,
        more: 2,
      },
    },
    mobile: {
      width: 320,
      cards: {
        total: 5,
        more: 2,
      },
    },
  };

function Movies({ savedCards, onSearch, onCardSave, onCardDelete, onLoading, loggedIn }) {

    const [initialCards, setInitialCards] = useState([]);
    const [renderCardsParams, setRenderCardsParams] = useState({});
    const [isSearching, setIsSearching] = useState(false);
    const [isFilterOn, setFilter] = useState(false);
    const [isCardsNotFound, setCardsNotFound] = useState(false);
    const [cardsForRender, setCardsForRender] = useState([]);
    const [foundCards, setFoundCards] = useState([]);
    
    const screenWidth = useResize();

    const handleSearchAndFiltering = useCallback(
        (cards, searchQuery) => {
          const found = handleMovieSearch(cards, searchQuery, false);
          setFoundCards(found);
          if (!found.length) {
            setCardsNotFound(true);
            setIsSearching(false);
            setCardsForRender(found);
          } else {
            const filtered = handleMovieFiltering(found, isFilterOn, false);
            setIsSearching(false);
            setCardsForRender(filtered);
            if (!filtered.length) {
              setIsSearching(false);
              setCardsNotFound(true);
            }
          }
        },
        [isFilterOn]
      );

      const handleOnSearchSubmit = useCallback(
        async (searchQuery) => {
          setCardsNotFound(false);
          setIsSearching(true);
          if (!initialCards.length) {
            const moviesData = await onSearch();
            if (moviesData) {
              setInitialCards(moviesData);
              handleSearchAndFiltering(moviesData, searchQuery);
            }
          } else {
            handleSearchAndFiltering(initialCards, searchQuery);
          }
        },
        [handleSearchAndFiltering, initialCards, onSearch]
      );

      const handleOnFilterClick = useCallback(
        (isChecked) => {
          setFilter(isChecked);
          setCardsNotFound(false);
          const filtered = handleMovieFiltering(foundCards, isChecked, false);
          setCardsForRender(filtered);
          if (!filtered.length) {
            setCardsNotFound(true);
          }
        },
        [foundCards]
      );

      useEffect(() => {
        if (screenWidth >= cardsRender.desktop.width) {
          setRenderCardsParams(cardsRender.desktop.cards);
        } else if (
          screenWidth < cardsRender.desktop.width &&
          screenWidth >= cardsRender.tablet.width
        ) {
          setRenderCardsParams(cardsRender.tablet.cards);
        } else {
          setRenderCardsParams(cardsRender.mobile.cards);
        }
      }, [screenWidth]);

      useEffect(() => {
        if (
          localStorage.getItem("foundMovies") &&
          localStorage.getItem("isMoviesFilterOn")
        ) {
          const filter = JSON.parse(localStorage.getItem("isMoviesFilterOn"));
          setFilter(filter);
          const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));
          setFoundCards(foundMovies);
          if (!foundMovies.length) {
            setCardsNotFound(true);
            setCardsForRender(foundMovies);
          } else {
            const filtered = handleMovieFiltering(foundMovies, filter, false);
            setCardsForRender(filtered);
            if (!filtered.length) {
              setCardsNotFound(true);
            }
          }
        }
      }, []);

    return (
        <section className="movies">
            <SearchForm 
            onSearch={handleOnSearchSubmit}
            onFilterChange={handleOnFilterClick}
            isFilterOn={isFilterOn}
            isSearching={isSearching}
            />
            <MoviesCardList 
            cards={cardsForRender}
            savedCards={savedCards}
            renderCardsParams={renderCardsParams}
            isCardsNotFound={isCardsNotFound}
            onCardSave={onCardSave}
            onCardDelete={onCardDelete}
            onLoading={onLoading}
            />
        </section>
    )
}

export default Movies;