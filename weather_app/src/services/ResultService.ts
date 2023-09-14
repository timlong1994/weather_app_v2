import axios from 'axios'

import type { AxiosInstance, AxiosError } from 'axios'

import type { Weather } from '../types'

type ServerError = { errorMessage: string }

const ErrorStatus = {
    APIKeyNotProvided: 1002,
    ParameterNotProvided: 1003,
    InvalidAPIRequest: 1005,
    NoMatchingLocationFound: 1006,
    InvalidAPIKey: 2006,
}

class InvalidLocationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidLocationError";
    }
}

class MissingAPIKeyError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MissingAPIKeyError";
    }
}

function isAxiosError(candidate: unknown): candidate is AxiosError {
    if (candidate && typeof candidate === 'object' && 'isAxiosError' in candidate) {
      return true;
    }
    return false;
  }
  

const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/current.json?key=1c5a98bf8b524cf5bb3185319230507&q=',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
})

export default {
    async getWeather(location: string): Promise<Weather| void> {
        try {
        const response = await apiClient.get(location)
        const weather = response.data
        return weather
        } catch(error: unknown) {
            if (isAxiosError(error)) {
                const message = error as AxiosError<any>

                if (message.response) {
                    const errorCode = message.response.data.error.code
                
                    switch (errorCode) {
                        case ErrorStatus.APIKeyNotProvided:
                            throw MissingAPIKeyError
                        case ErrorStatus.ParameterNotProvided:
                            break;
                        case ErrorStatus.InvalidAPIRequest:
                            throw InvalidLocationError
                        case ErrorStatus.NoMatchingLocationFound:
                            throw InvalidLocationError
                        case ErrorStatus.InvalidAPIKey:
                            break;
                    }
                }
            }
        }
    }
}