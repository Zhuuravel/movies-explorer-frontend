export const optionsApi = {
    url: 'https://api.nomoreparties.co'
}

class MoviesApi {
    constructor({url, headers}) {
        this._url = url;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
          }
          return Promise.reject(`${res.status === 404 && "Страница по указанному маршруту не найдена." || res.status === 500 && "На сервере произошла ошибка." || "Что-то пошло не так..."}`);
    }

    _request(url, options) {
        return fetch(`${this._url}${url}`, options).then(this._checkResponse)
    }

    getAllCards() {
        return this._request('/beatfilm-movies', {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
            },
        })
    }
}

const myMoviesApi = new MoviesApi(optionsApi);

export default myMoviesApi;