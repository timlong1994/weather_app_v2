import { ref } from 'vue'

import ResultService from '../services/ResultService'

import type { Ref } from 'vue'

import type { Results } from '../types'

const error: Ref<string> = ref('')
const data: Ref<Results | null> = ref({
    country: 'country',
    location: 'location',
    temperature: 0,
    feels_like: 0,
    icon: 'icon',
    condition: 'condition',
    place: 'dodo'
})

export async function useAxios(
    location: string
): Promise<{ data: Ref<Results | null>; error: Ref<String> }> {
    try {
        const response = await ResultService.getWeather(location)

        const processedResult = {
            country: response.location.country,
            location: response.location.name,
            temperature: response.current.temp_c,
            feels_like: response.current.feelslike_c,
            icon: response.current.condition.icon,
            condition: response.current.condition.text
        }

        data.value = processedResult

        error.value = ''
    } catch (errors: unknown) {
        switch ((errors as Error).name) {
            case 'InvalidLocation':
                error.value = 'Please enter a valid location'
                break
            case 'MissingParameter':
                error.value = 'Please enter a location'
                break
            default:
                error.value = 'Something went wrong, please try again later'
        }
        data.value = null
    }
    return { data, error }
}
