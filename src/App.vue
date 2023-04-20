<template>
  <main>
    <header class="header">
      <img src="/logo.svg" alt="" class="header-logo">
      <h2>My Favorite Movies</h2>
    </header>
    <div class="tabs">
      <button :class="['btn', {btn_green: movieStore.activeTab === 1}]" @click="setTab(1)">
        Favorite
      </button>
      <button :class="['btn', {btn_green: movieStore.activeTab === 2}]" @click="setTab(2)">
        Search
      </button>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <div>
        <h3>Watched movies</h3>
        <p>Total watched {{ movieStore.watchedMovies.length}}</p>
        <the-movies
            v-for="movie in movieStore.watchedMovies"
            :key="movie.id"
            :movie="movie"
        />
      </div>
      <h3>All movies</h3>
      <p>Total films: {{movieStore.totalCount}}</p>
      <the-movies
          v-for="movie in movieStore.movies"
          :key="movie.id"
          :movie="movie"
      />
    </div>
    <div class="search" v-else>
      <p>Search</p>
      <the-search/>
    </div>
  </main>
</template>

<script setup>
import {useMovieStore} from "./stores/MovieStore.js";
import TheMovies from "./components/TheMovies.vue"
import TheSearch from "./components/TheSearch.vue";
const movieStore = useMovieStore()

const setTab = (id) => {
  return movieStore.setActive(id)
}
</script>
