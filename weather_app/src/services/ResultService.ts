import axios from 'axios'

import type { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/current.json?key=1c5a98bf8b524cf5bb3185319230507&q=',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
})

export default {
    getWeather(location: string) {
        return apiClient.get(location)
    }
}