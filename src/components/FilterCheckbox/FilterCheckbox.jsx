import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <fieldset className="checkbox">
            <div className="checkbox__line"></div>
            <label className="checkbox__label" htmlFor="short">
                <input className="checkbox__input" id="short" name="short" type="checkbox"/>
                <span className="checkbox__switch">Короткометражки</span>
            </label>
        </fieldset>
    )
}

export default FilterCheckbox;