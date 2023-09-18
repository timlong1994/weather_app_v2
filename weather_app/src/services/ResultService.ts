import axios from 'axios'

import type { AxiosInstance, AxiosError } from 'axios'

import type { Weather } from '../types'

class InvalidLocation extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidLocation'
  }
}

class MissingAPIKey extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'MissingAPIKey'
  }
}

class InvalidAPIRequest extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidAPIRequest'
  }
}

class MissingParameter extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'MissingParameter'
  }
}

class InvalidAPIKey extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidAPIKey'
  }
}

class UndefinedErrorCode extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'UndefinedErrorCode'
  }
}

function isAxiosError(candidate: unknown): candidate is AxiosError {
  return Boolean(candidate && typeof candidate === 'object' && 'isAxiosError' in candidate)
}

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://api.weatherapi.com/v1/current.json?key=1c5a98bf8b524cf5bb3185319230507&q=',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async getWeather(location: string): Promise<Weather> {
    try {
      const { data } = await apiClient.get(location)

      return data
    } catch (error: unknown) {
      if (!isAxiosError(error)) {
        throw error
      }

      switch ((error as AxiosError<any>).response?.data.error.code) {
        case 1002:
          throw MissingAPIKey
        case 1003:
          throw MissingParameter
        case 1005:
          throw InvalidAPIRequest
        case 1006:
          throw InvalidLocation
        case 2006:
          throw InvalidAPIKey
        default:
          throw UndefinedErrorCode
      }
    }
  }
}
