import axios from 'axios'

const _apiKey = 'WXuIJzX8HU8gC4Q9O1yy'
const _apiBase = 'https://the-one-api.dev/v2'

const authAxios = axios.create({
    baseURL: _apiBase,
    headers: {
        Autorization: `Bearer ${_apiKey}`
    }
})

const fetchData = async() => {
    try {
        const result = await
    }
}