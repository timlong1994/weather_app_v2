<script setup lang="ts">
import { ref } from 'vue'

import SearchBar from '../components/SearchBar.vue'
import SearchResult from '../components/SearchResult.vue'
import { useAxios } from '../composables/useAxios'

import type { Ref } from 'vue'

import type { Results } from '../types'

const forecast: Ref<Results | null> = ref(null)
const errorMessage: Ref<String> = ref('')

async function getResults(location: string): Promise<void> {
    const { data, error } = await useAxios(location)

    forecast.value = data.value
    errorMessage.value = error.value
}
</script>

<template>
    <h2>How's the weather?</h2>
    <SearchBar @input="getResults" :errorMessage="errorMessage" />
    <SearchResult :weather="forecast" />
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
../composables/useAxios
