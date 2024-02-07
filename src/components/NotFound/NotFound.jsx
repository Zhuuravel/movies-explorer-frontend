import React from 'react';
import { Link } from "react-router-dom";
import './NotFound.css';

function NotFound() {
    return (
        <main className="not-found">
            <h2 className="not-found__title">404</h2>
            <p className="not-found__description">Страница не найдена</p>
            <Link className="not-found__link" to="/">Назад</Link>
        </main>
    )
}

export default NotFound;