import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onFilterChange, isFilterOn, isSearching }) {
    return (
        <fieldset className="checkbox">
            <div className="checkbox__line"></div>
            <label className="checkbox__label" htmlFor="short">
                <input 
                className="checkbox__input" 
                id="short" 
                name="short" 
                type="checkbox"
                disabled={isSearching ? true : false}
                checked={isFilterOn}
                onChange={(evt) => onFilterChange(evt.target.checked)}
                />
                <span className="checkbox__switch">Короткометражки</span>
            </label>
        </fieldset>
    )
}

export default FilterCheckbox;