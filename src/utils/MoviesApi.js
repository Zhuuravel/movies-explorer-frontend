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
      
          return Promise.reject(res);
        }

    _request(url, options) {
        return fetch(`${this._url}${url}`, options).then(this._checkResponse)
    }

    getAllCards(token) {
        return this._request('/beatfilm-movies', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': "application/json",
            },
        })
    }
}

const myMoviesApi = new MoviesApi(optionsApi);

export default myMoviesApi;