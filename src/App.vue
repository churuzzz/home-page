<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <nav class="flex flex-row gap-10 p-5 text-xl bg-steel_blue-500 text-white">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
  <main class="bg-steel_blue-400">
    <RouterView />
  </main>
</template>