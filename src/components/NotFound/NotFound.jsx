import React from "react";
import { useNavigate } from "react-router-dom";
import './NotFound.css';


function NotFound() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1);
  }

    return (
        <main className="not-found">
            <h2 className="not-found__title">404</h2>
            <p className="not-found__description">Страница не найдена</p>
            <button className="not-found__button" onClick={goBack}>Назад</button>
        </main>
    )
}

export default NotFound;