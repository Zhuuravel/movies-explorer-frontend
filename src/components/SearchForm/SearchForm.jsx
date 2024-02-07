import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import React from 'react';
import './SearchForm.css';

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <fieldset className="search__line">
                    <div className="search__icon"></div>
                    <input className="search__input" name="search" placeholder="Фильм" type="search"/>
                    <button className="search__button" type="submit">Найти</button>
                </fieldset>
                <FilterCheckbox />
            </form>
            <div className="search__underline"></div>
        </section>
    )
}

export default SearchForm;