<script setup lang="ts">

</script>

<template>
    <p id="error_message">Please enter a valid location</p>
</template>

<style scoped>
#error_message {
    margin: 10px;
    font-size: 18pt;
    text-align: center;
}

/* Tablet Breakpoint */
@media only screen and (min-width: 600px) {
    body {
        font-size: 22pt;
        height: 100%;
        justify-content: center;
    }
}

/* Desktop Breakpoint */
@media only screen and (min-width: 850px) {
    #error_message {
        text-align: center;
        grid-row: 2;
        grid-column: 1/11;
    }
}

</style>
