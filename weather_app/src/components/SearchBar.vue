<script setup lang="ts">
import { ref } from 'vue'

import type { Ref } from 'vue'

defineEmits<{
    input: [payload: string]
}>()

defineProps<{
    errorMessage: String
}>()

const location: Ref<string> = ref('')
</script>

<template>
    <form id="get_location" @submit.prevent="$emit('input', location)">
        <input
            v-model="location"
            type="text"
            class="search"
            id="search_bar"
            placeholder="location"
        />
        <input type="submit" id="submit" value="&#x1F50D;" />
    </form>

    <p id="error_message" v-if="errorMessage !== ''">{{ errorMessage }}</p>
</template>

<style scoped>
form {
    height: 30px;
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    flex-basis: auto;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    align-self: center;
    border-radius: 15px;
    background-color: #f3f0ff;
    border-width: 10px;
    border-color: #6741d9;
    box-shadow: inset 1px 1px #d0bfff;
    padding: 10px 0px 10px 10px;
}

#search_bar {
    width: 45vmin;
    height: 35px;
    font-size: 14pt;
    text-align: left;
    border-radius: 5px;
    border-color: #f3f0ff;
    background-color: #f3f0ff;
    border-style: solid;
    border-width: 1px;
    padding-left: 10px;
}

#search_bar:focus {
    outline: none;
}

#search_bar:focus::placeholder {
    color: transparent;
}

#submit {
    border-style: solid;
    border-radius: 0px 15px 15px 0px;
    background-color: #b197fc;
    border-color: #b197fc;
    border-width: 10px;
    height: 50px;
    width: 50px;
}

#submit:hover {
    background-color: #845ef7;
    border-color: #845ef7;
    cursor: pointer;
}

#submit:active {
    background-color: #7048e8;
    border-color: #7048e8;
}

#error_message {
    margin: 10px;
    font-size: 18pt;
    text-align: center;
}

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

    form {
        height: 40px;
        justify-content: center;
        margin: 20px auto 10px auto;
    }

    #search_bar {
        width: 240pt;
        height: 39px;
        font-size: 18pt;
    }

    #submit {
        height: 60px;
        width: 75px;
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

    form {
        column-gap: 10px;
        justify-content: center;
        margin: 20px auto 20px auto;
    }

    #search_bar {
        width: 340px;
        padding-left: 20px;
        text-overflow: clip;
    }

    #error_message {
        text-align: center;
        grid-row: 2;
        grid-column: 1/11;
    }
}
</style>
