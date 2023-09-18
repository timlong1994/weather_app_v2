<script setup lang="ts">
import type { Weather } from '../types'

defineProps<{
    weather: Weather | null
}>()
</script>

<template>
    <section class="search_result" v-if="weather">
        <h1 id="country">{{ weather.location.country}}</h1>
        <p id="location">{{ weather.location.name}}</p>
        <p id="temperature">{{ weather.current.temp_c}}°</p>
        <p id="feels_like">Feels like: {{ weather.current.feelslike_c}}°</p>
        <img id="weather_icon" :src="weather.current.condition.icon">
        <p id="forecast">{{ weather.current.condition.text}}</p>
    </section>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
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

    #country {
        font-size: 20pt;
        font-weight: 600;
    }

    #location {
        font-size: 28pt;
    }
    
    #temperature {
        font-size: 80pt;
        font-weight: 100;
        margin: 0 0 0 45px;
    }
    
    #weather_icon {
        width: 70px;
        image-resolution: 600dpi;
    }
    
    #forecast {
        margin: 0px;
        font-size: 24pt;
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

    .search_result {
        align-self: center;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-areas:
            "e e e e e e"
            "f f f f f f"
            "c c c c c c"
            "a a a b b b"
            "a a a d d d";
        width: 450px;
    }

    #country {
        font-size: 18pt;
        text-size-adjust: auto;
        margin: 15px 0 5px 0;
        grid-area: e;
        text-align: center;
    }

    #location {
        grid-area: f;
        font-weight: 200;
        margin: 0 0 25px 0;
    }

    #weather_icon {
        width: 60px;
        margin: 0 -10px 0 0;
        grid-area: b;
        justify-self: end;
    }

    #temperature {
        font-size: 80pt;
        width: fit-content;
        margin: 0 0 -24px 0;
        grid-area: a;
        text-align: right;
        align-self: last baseline;
    }

    #feels_like {
        display: block;
        margin: 15px -35px 0 0;
        grid-area: d;
        align-self: last baseline;
    }

    #forecast {
        margin: 0 0 20px 0;
        grid-area: c;
        font-size: 26pt;
        font-weight: 300;
        text-align: left;
    }

    #error_message {
        text-align: center;
        grid-row: 2;
        grid-column: 1/11;
    }
}

</style>
