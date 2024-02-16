import React from 'react';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';
import { handleSavedStatus } from "../../utils/utils";
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
    cards,
    savedCards,
    renderCardsParams,
    isCardsNotFound,
    onCardSave,
    onCardDelete,
    onLoading,
  }) {

    const [renderCards, setRenderCards] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/movies" && cards.length) {
          const result = cards.filter((card, index) => {
            return index < renderCardsParams.total;
          });
          setRenderCards(result);
        }
      }, [location.pathname, cards, renderCardsParams]);

      useEffect(() => {
        if (location.pathname === "/saved-movies") {
          setRenderCards(cards);
        }
      }, [location.pathname, cards]);

      function handleMoreClick() {
        const start = renderCards.length;
        const end = start + renderCardsParams.more;
        const count = cards.length - start;
        if (count > 0) {
          const additionalCards = cards.slice(start, end);
          setRenderCards([...renderCards, ...additionalCards]);
        }
      }

    return (
        <section className="cards">
            {!localStorage.getItem("searchQuery") && cards.length === 0 && null}
            {onLoading && cards.length === 0 && <Preloader />}
            {isCardsNotFound && (
            <p className="cards__info">Ничего не найдено</p>
            )}
            {cards.length !== 0 && !isCardsNotFound && (
                <>
                    <ul className="cards__list">
                        {renderCards.map((card) => {
                            return (
                                <MoviesCard 
                                card={card}
                                key={card.id || card._id}
                                isSaved={handleSavedStatus(savedCards, card)}
                                onCardSave={onCardSave}
                                onCardDelete={onCardDelete}/>
                            )
                        })
                        }
                    </ul>
                    {renderCards.length >= 5 &&
                    renderCards.length < cards.length && (
                        <button className="cards__more" type="button" onClick={handleMoreClick}>Ещё</button>
                    )}
                </>
            )}
        </section>
    )
}

export default MoviesCardList;