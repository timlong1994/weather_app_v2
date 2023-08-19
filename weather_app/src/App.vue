<script setup lang="ts">
import UserInterface from '@/components/UserInterface.vue'
</script>

<template>
  <main>
    <UserInterface />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900");

* {
    font-family: "Montserrat";
}

html {
    height: 100%;
}

h2 {
    text-align: center;
    margin: 100px 9% 10px 9%;
    text-shadow: 1px 1px #f8f0fc;
}

body {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-image: url('@/assets/background.jpg'); 
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
}

/* Desktop Breakpoint */
@media only screen and (min-width: 850px) {
  body {
    font-size: 22pt;
    justify-content: center;
  }
}
</style>
