import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/current.json?key=1c5a98bf8b524cf5bb3185319230507&q=',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
})

export default {
    getWeather(location) {
        return apiClient.get(location)
    }
}