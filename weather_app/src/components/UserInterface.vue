<script setup lang="ts">
import { ref } from "vue"

import ErrorMessage from '@/components/ErrorMessage.vue'
import SearchBar from '@/components/SearchBar.vue'
import SearchResult from '@/components/SearchResult.vue'
import ResultService from '@/services/ResultService'

const results = ref()
const errorMessage = ref()

interface Response {
    data: JSON
}

function search(location: string) {
    ResultService.getWeather(location)
        .then((response: Response) => {
            results.value = response.data
            errorMessage.value = false
        })
        .catch((error: Error) => {
            results.value = false
            errorMessage.value = true
            console.log(error)
    })
}
</script>

<template>
    <h2>How's the weather?</h2>
    <SearchBar @location="(n) => search(n)"/>
    <SearchResult v-if="results" :weather="results"/>
    <ErrorMessage v-if="errorMessage" />
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