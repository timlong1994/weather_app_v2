<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import ResultService from '@/services/ResultService.js'

</script>

<template>
  <h1>test</h1>

</template>

<style scoped>

.search_result {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

#country {
    text-transform:capitalize;
    padding: 0;
    margin: 0 0 10px 0;
    font-size: 16pt;
    font-weight: 500;
    order: 2;
}

#location {
    font-size: 24pt;
    font-weight: 300;
    margin: 30px 0 10px 0;
    order: 1;
}

#temperature {
    font-size: 60pt;
    font-weight: 100;
    margin: 0 0 0 35px;
    order: 3;
}

#feels_like {
    display: none;
}

#weather_icon {
    width: 70px;
    image-resolution: 600dpi;
    order: 4;
}

#forecast {
    margin: 0px;
    font-size: 20pt;
    order: 5;
}

#error_message {
    margin: 0;
}
</style>
