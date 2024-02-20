import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import React from 'react';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './SearchForm.css';

function SearchForm({ onSearch, onFilterChange, isFilterOn, isSearching }) {

    const [searchQuery, setSearchQuery] = useState("");
    const [queryError, setQueryError] = useState("");
    const location = useLocation();

    useEffect(() => {
        if (
          location.pathname === "/movies" &&
          localStorage.getItem("moviesSearchQuery")
        ) {
          const savedSearchQuery = localStorage.getItem("moviesSearchQuery");
          setSearchQuery(savedSearchQuery);
        }
      }, [location.pathname]);

      useEffect(() => {
        setQueryError("");
      }, [searchQuery]);

      function handleSubmit(e) {
        e.preventDefault();
        if (location.pathname === "/movies") {
          searchQuery
            ? onSearch(searchQuery)
            : setQueryError("Нужно ввести ключевое слово");
        } else {
          onSearch(searchQuery);
        }
      }
    

    return (
        <section className="search">
            <form className="search__form" noValidate onSubmit={handleSubmit}>
                <fieldset className="search__line">
                    <div className="search__icon"></div>
                    <input className="search__input" name="search" 
                    placeholder="Фильм" 
                    type="search" 
                    required
                    autoComplete="off"
                    autoCapitalize="off"
                    disabled={isSearching ? true : false}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery || ""}/>
                    <button className="search__button" type="submit">Найти</button>
                </fieldset>
                <FilterCheckbox 
                onFilterChange={onFilterChange}
                isFilterOn={isFilterOn}
                isSearching={isSearching}
                />
            </form>
            <span className="search__error">{queryError}</span>
            <div className="search__underline"></div>
        </section>
    )
}

export default SearchForm;