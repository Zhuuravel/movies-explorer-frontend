const optionsApi = {
    url: 'http://localhost:3000'
}

class MainApi {
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

    registration({name, email, password}) {
        return this._request('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({name, email, password})
        })
    };
    
    login({email, password}) {
        return this._request('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })  .then((data) => {
                if (data.token){
                    console.log(data.token)
                    localStorage.setItem('token', data.token);
                    return data;
                }
            })
    };
    
    checkToken(token) {
        return this._request('/users/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        }) 
        .then((res) => res)
    }

    getMyUser(token) {
        return this._request('/users/me', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': "application/json",
            },
        })
    }

    updateUserInfo(data, token) {
        return this._request('/users/me', {
            method: 'PATCH',
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            }),
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': "application/json",
            },
        })
    }

    getMovies(token) {
        return this._request('/movies', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': "application/json",
            },
        })
    }

    addMovie(data, token) {
        return this._request(`/movies`, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': "application/json",
            },
            body: JSON.stringify(data)
        })
    }

    deleteMovie(_id, token) {
        return this._request(`/movies/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': "application/json",
            },
        })
    }
}

 const myMainApi = new MainApi(optionsApi);

 export default myMainApi;