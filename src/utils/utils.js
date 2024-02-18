//фильтр по длительности
export const convertDuration = (duration) => {
    const minutes = duration % 60;
    const hours = (duration - minutes) / 60;
    if (hours < 1) {
      return `${minutes}м`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  }
  //фильтр корометражек по тогглу
    export const handleMovieFiltering = (movies, isFilterOn, isSavedMovies) => {
        if (!isSavedMovies) {
            localStorage.setItem("isMoviesFilterOn", isFilterOn);
        } else {
            localStorage.setItem("isSavedMoviesFilterOn", isFilterOn);
        }
    if (isFilterOn) {
        const result = movies.filter((movie) => movie.duration <= 40);
        return result;
    } else {
        return movies;
    }
    }
  //поиск фильмов
    export const handleMovieSearch = (movies, searchQuery, isSavedMovies) => {
        const normalizeSearchQuery = searchQuery.toLowerCase().trim();
        const result = movies.filter((movie) => {
            const normalizeNameRu = movie.nameRU.toLowerCase().trim();
            const normalizeNameEn = movie.nameEN.toLowerCase().trim();
            return (
                normalizeNameRu.includes(normalizeSearchQuery) ||
                normalizeNameEn.includes(normalizeSearchQuery)
            );
        });
        if (!isSavedMovies) {
            localStorage.setItem("foundMovies", JSON.stringify(result));
            localStorage.setItem("moviesSearchQuery", normalizeSearchQuery);
        } 
        else {
            localStorage.setItem("savedMoviesSearchQuery", normalizeSearchQuery);
        }
        return result;
    }
    //сохраненные карточки
    export const handleSavedStatus = (savedCards, movieCard) => {
        return savedCards.find((card) => {
            return card.movieId === (movieCard.id || movieCard.movieId);
        });
    }