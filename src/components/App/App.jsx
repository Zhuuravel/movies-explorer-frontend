import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import {Route, Routes, Navigate} from 'react-router-dom';
import "./App.css";
const YourName = "Лиза";
const loggedIn = true;

function App() {
    return (
        <div className="root">
            <Routes>
            <Route 
                    path="*"
                    element={
                        <>
                            <NotFound />
                        </>
                    }
                />
                <Route 
                    path="/"
                    element={
                        <>
                            <Header isLoggedIn={loggedIn} isMainPage/>
                            <Main />
                            <Footer />
                        </>
                    }
                />
                <Route 
                    path="/movies"
                    element={
                        <>
                            <Header isLoggedIn={loggedIn} isActiveMovies/>
                            <Movies />
                            <Footer />
                        </>
                    }
                />
                <Route 
                    path="/saved-movies"
                    element={
                        <>
                            <Header isLoggedIn={loggedIn} isActiveMSavedovies/>
                            <SavedMovies />
                            <Footer />
                        </>
                    }
                />
                <Route 
                    path="/profile"
                    element={
                        <>
                            <Header isLoggedIn={loggedIn}/>
                            <Profile title={`Привет, ${YourName}`}/>
                        </>
                    }
                />
                <Route 
                    path="/signin"
                    element={
                        <>
                            <Header isLoggedIn={loggedIn} withoutNavigate/>
                            <Login title="Рады видеть!" button="Войти" text="Ещё не зарегистрированы?" link="Регистрация" route="/signup"/>
                        </>
                    }
                />
                <Route 
                    path="/signup"
                    element={
                        <>
                            <Header isLoggedIn={loggedIn} withoutNavigate/>
                            <Register title="Добро пожаловать!" button="Зарегистрироваться" text="Уже зарегистрированы?" link="Войти"/>
                        </>
                    }
                />
            </Routes>
            {/* <Header />
            <Main />
            <Movies />
            <SavedMovies />
            <Footer />
            <Profile title={`Привет, ${YourName}`}/>
            <Login title="Рады видеть!" button="Войти" text="Уже зарегистрированы?" link="Войти"/>
            <Register title="Добро пожаловать!" button="Зарегистрироваться" text="Ещё не зарегистрированы?" link="Регистрация"/> */}
        </div>
    )
}

export default App;