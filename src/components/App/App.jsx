import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import MessagePopup from '../MessagePopup/MessagePopup';
import {useEffect, useState} from "react";
import {Route, Routes, useNavigate} from 'react-router-dom';
import "./App.css";
import myMainApi from "../../utils/MainApi";
import myMoviesApi from "../../utils/MoviesApi";
import {optionsApi} from "../../utils/MoviesApi"
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

function App() {

    const [currentUser, setCurrentUser] = useState({}); // текущий польз
    const [loggedIn, setLoggedIn] = useState(false); //залогиненный
    const [onLoading, setLoading] = useState(false); //загрузка
    const [currentToken, setCurrentToken] = useState(localStorage.getItem('token')); //наличие токена
    const [userName, setUserName] = useState(''); //имя польза
    const [savedCards, setSavedCards] = useState([]); //сохранённые карточки
    const [isNavListPopupOpen, setNavListPopupOpen] = useState(false); //попап с меню навигации
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');


    const navigate = useNavigate();

    //РЕГИСТРАЦИЯ
    const handleRegistration = ({name, email, password}) => {
        setLoading(true);
        myMainApi.registration({name, email, password})
            .then(() => {
                handleLogin({email, password})
            })
            .catch((err) => {
                console.log(err);
                err.json()
                .then((err) => {
                    setMessage(err.message);
                    setIsOpen(true);
                })
            })
            .finally(() => {
                setLoading(false);
            })
    }

    //АВТОРИЗАЦИЯ
    const handleLogin = ({email, password}) => {
        setLoading(true);
        myMainApi.login({email, password})
            .then((data) => {
                if (data.token) {
                    setCurrentToken(data.token)
                    setLoggedIn(true);
                }
            }).then(() => {
                navigate('/movies', {replace: true})
            })
            .catch((err) => {
                console.log(err);
                err.json()
                .then((err) => {
                    setMessage(err.message);
                    setIsOpen(true);
                })
            })
            .finally(() => {
                setLoading(false);
            })
    }
    //ВЫХОД
    const signOut = () => {
        navigate('/', {replace: true});
        setLoggedIn(false)
        setSavedCards([]);
        setCurrentToken('');
        setUserName('');
        setTimeout(() => {
            localStorage.clear();
        }, 500);
    }

    //ОБНОВЛЕНИЕ ДАННЫХ ПРОФИЛЯ
    const handleUpdateUserInfo = ({name, email}) => {
        setLoading(true);
        myMainApi.updateUserInfo({name, email}, currentToken)
            .then((userData) => {
                setLoggedIn(true);
                setCurrentUser(userData);
                setUserName(userData.name)
            })
            .catch((err) => {
                console.log(err);
                err.json()
                .then((err) => {
                    setMessage(err.message);
                    setIsOpen(true);
                })
            })
            .finally(() => {
                setLoading(false);
            })
    }

    // ПРОВЕРКА ТОКЕНА
    useEffect(() => {
        handleTokenCheck();
    }, [])

    // ПОЛУЧЕНИЕ ДАННЫХ ПРОФИЛЯ
    useEffect(() => {
        if (loggedIn && currentToken) {
            Promise.all([myMainApi.getMyUser(currentToken), myMainApi.getMovies(currentToken)])
                .then(([userData, cards]) => {
                    // тут установка данных пользователя
                    setCurrentUser(userData);
                    setUserName(userData.name);
                    // и тут отрисовка сохраненных карточек
                    setSavedCards(cards)
                })
                .catch((err) => {
                    console.log(err);
                    err.json()
                    .then((err) => {
                        setMessage(err.message);
                        setIsOpen(true);
                    })
                })
        }
    }, [loggedIn, currentToken])

    const handleTokenCheck = () => {
        if (currentToken) {
            myMainApi.checkToken(currentToken)
                .then((res) => {
                    if (res) {
                        setUserName(res.name);
                        setLoggedIn(true);
                        navigate('/movies', {replace: true})
                    }
                })
                .catch(err => console.log(err));
        }
    }

    async function handleGetAllMovies() {
        setLoading(true);
        try {
            const moviesData = await myMoviesApi.getAllCards();
            if (moviesData) {
            return moviesData;
            }
        } catch (err) {
          console.log(err);
          setMessage(err);
          setIsOpen(true);
        } finally {
          setLoading(false);
        }
    }

    //ДОБАВЛЕНИЕ ФИЛЬМОВ В СОХРАНЕННЫЕ
    const handleSaveMovie = (movie) => {
        myMainApi.addMovie({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `${optionsApi.url}${movie.image.url}`,
            trailerLink: movie.trailerLink,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
            thumbnail: `${optionsApi.url}${movie.image.formats.thumbnail.url}`,
            movieId: movie.id,
        }, currentToken)
        .then((movieData) => {
            if (movieData) {
                setSavedCards([movieData, ...savedCards]);
            }
        })
        .catch((err) => {
            console.log(err);
            err.json()
            .then((err) => {
                setMessage(err.message);
                setIsOpen(true);
            })
        });
    }

    //УДАЛЕНИЕ ФИЛЬМОВ ИЗ СОХРАНЕННЫХ
    const handleDeleteMovie = (movie) => {
        const savedMovie = savedCards.find(
            (card) => card.movieId === movie.id || card.movieId === movie.movieId
        );
        myMainApi.deleteMovie(savedMovie._id, currentToken)
            .then(() => {
                setSavedCards((state) => state.filter((c) => c._id !== savedMovie._id));
            })
            .catch((err) => {
                console.log(err);
                err.json()
                .then((err) => {
                    setMessage(err.message);
                    setIsOpen(true);
                })
            });
    }

    const handleNavListPopupOpen = () => {
        setNavListPopupOpen(true);
    }

    const handleNavListPopupClose = () => {
        setNavListPopupOpen(false);
    };

    const handleMessagePopupClose = () => {
        setMessage("");
        setIsOpen(false);
    };

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="root">
                <Routes>
                    <Route
                        path="/*"
                        element={
                            <NotFound />
                            }
                    />
                    <Route
                        path="/movies"
                        element={
                            <>
                                <Header isLoggedIn={loggedIn} isNavListPopupOpen={isNavListPopupOpen} onOpen={handleNavListPopupOpen} onClose={handleNavListPopupClose} />
                                <ProtectedRouteElement
                                    element={Movies}
                                    savedCards={savedCards}
                                    onSearch={handleGetAllMovies}
                                    onCardSave={handleSaveMovie}
                                    onCardDelete={handleDeleteMovie}
                                    onLoading={onLoading}
                                    loggedIn={loggedIn}
                                />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/saved-movies"
                        element={
                            <>
                                <Header isLoggedIn={loggedIn} isNavListPopupOpen={isNavListPopupOpen} onOpen={handleNavListPopupOpen} onClose={handleNavListPopupClose} />
                                <ProtectedRouteElement
                                    element={SavedMovies}
                                    savedCards={savedCards}
                                    onCardDelete={handleDeleteMovie}
                                    loggedIn={loggedIn}
                                />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <>
                                <Header isLoggedIn={loggedIn} isNavListPopupOpen={isNavListPopupOpen} onOpen={handleNavListPopupOpen} onClose={handleNavListPopupClose} />
                                <ProtectedRouteElement
                                    element={Profile}
                                    title={`Привет, ${userName || ''}`}
                                    onUpdateUser={handleUpdateUserInfo}
                                    onLogout={signOut}
                                    onLoading={onLoading}
                                    loggedIn={loggedIn}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <>
                                <Header isLoggedIn={loggedIn} isMainPage isNavListPopupOpen={isNavListPopupOpen} onOpen={handleNavListPopupOpen} onClose={handleNavListPopupClose}/>
                                <Main />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/signin"
                        element={
                            <>
                                <Header isLoggedIn={loggedIn} withoutNavigate/>
                                <Login onLoading={onLoading} title="Рады видеть!" text="Ещё не зарегистрированы?" link="Регистрация" route="/signup" handleLogin={handleLogin} />
                            </>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <>
                                <Header isLoggedIn={loggedIn} withoutNavigate/>
                                <Register onLoading={onLoading} title="Добро пожаловать!" text="Уже зарегистрированы?" link="Войти" handleRegistration={handleRegistration} route="/signin" />
                            </>
                        }
                    />
                </Routes>
                <MessagePopup
                    isOpen={isOpen}
                    message={message}
                    onClose={handleMessagePopupClose}
                />
            </div>
        </CurrentUserContext.Provider>
    )
}

export default App;
