<script setup lang="ts">
import { ref } from "vue"

import SearchBar from '../components/SearchBar.vue'
import SearchResult from '../components/SearchResult.vue'
import ResultService from '../services/ResultService'

import InvalidLocationError from '../services/ResultService'


import type { Ref } from "vue"

import type { Weather } from '../types'

const results: Ref<Weather | null | void> = ref(null)
const errorMessage: Ref<String | null> = ref("")

async function getWeather(location: string): Promise<void> {
        try {
            const response = await ResultService.getWeather(location)
            results.value = response
            errorMessage.value = null
        } catch (error) {
            results.value = null

            if (error instanceof Error) {
                switch (error.name) {
                    case "InvalidLocationError":
                        errorMessage.value = "Please enter a valid location"
                        break;
                    }
            }      
        }
}

</script>

<template>
    <h2>How's the weather?</h2>
    <SearchBar @input="getWeather" :message="errorMessage"/>
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