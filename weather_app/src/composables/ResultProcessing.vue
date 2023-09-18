<script setup lang="ts">
import { ref } from 'vue'

import ResultService from '../services/ResultService'

import type { Ref } from 'vue'
import type { Weather, SearchResult } from '../types'

const WeatherForecast: Ref<SearchResult> = ref({
    country: "S",
    location: "S",
    temperature: 23,
    feelslike_c: 23,
    icon: "place",
    condition: "cond"
})

const results: Ref<Weather | null> = ref(null)
const errorMessage: Ref<String> = ref('')

async function getWeather(location: string): Promise<void> {
    try {
        const response = await ResultService.getWeather(location)
        results.value = response
        errorMessage.value = ''
    } catch (error: unknown) {
        switch ((error as Error).name) {
            case 'InvalidLocation':
                errorMessage.value = 'Please enter a valid location'
                break
            case 'MissingParameter':
                errorMessage.value = 'Please enter a location'
                break
            default:
                errorMessage.value = 'Something went wrong, please try again later'
        }
        results.value = null
    }
}

</script>


