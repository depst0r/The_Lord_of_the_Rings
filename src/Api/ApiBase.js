import axios from 'axios'

export default class fetchData {

    _apiKey = 'WXuIJzX8HU8gC4Q9O1yy'
    _apiBase = 'https://WXuIJzX8HU8gC4Q9O1yy/the-one-api.dev/v2'

    authAxios = axios.create({
        baseURL: _apiBase,
        headers: {
            Autorization: `Bearer ${_apiKey}`
        }
    })

    fetchData = async() => {
        try {
            const result = await
        }
    }

}