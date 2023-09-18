<script setup lang="ts">
import { ref } from 'vue'

import SearchBar from '../components/SearchBar.vue'
import SearchResult from '../components/SearchResult.vue'
import ResultService from '../services/ResultService'

import type { Ref } from 'vue'

import type { Weather } from '../types'

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

<template>
    <h2>How's the weather?</h2>
    <SearchBar @input="getWeather" :message="errorMessage" />
    <SearchResult :weather="results" />
</template>

<style scoped>
/* Tablet Breakpoint */
@media only screen and (min-width: 600px) {
    body {
        font-size: 20pt;
        text-align: center;
        height: 100%;
    }

    h2 {
        margin-top: 150px;
    }
}

/* Desktop Breakpoint */
@media only screen and (min-width: 850px) {
    body {
        font-size: 22pt;
        justify-content: center;
    }

    h2 {
        margin: 10px auto 10px auto;
    }
}
</style>
