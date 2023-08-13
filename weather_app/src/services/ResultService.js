import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/current.json',
    withCredentials: false
})

export default {
    getWeather() {
        const result = apiClient.get({
            params: {
                key: '1c5a98bf8b524cf5bb3185319230507',
                q: 'Singapore',
            }
        })

        console.log(result)
    }
}