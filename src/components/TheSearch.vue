<template>
  <form @submit.prevent="searchStore.getMovie(searchMovie)">
    <input
        type="text"
        class="search-input"
        placeholder="search movie"
        v-model="searchMovie"/>
  </form>
  <the-loader v-if="searchStore.loader"/>
  <div v-else>
    <the-movies
        v-for="movie in searchStore.movies" :key="movie.id" :movie="movie"
    />
  </div>
</template>

<script setup>
import TheLoader from "./TheLoader.vue";
import TheMovies from './TheMovies.vue'
import {useSearchStore} from "../stores/SearchStore.js";
import {ref} from "vue";

const searchStore = useSearchStore();
const searchMovie = ref('');
</script>
