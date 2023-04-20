<template>
  <div class="movie">
    <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
         :alt="movie.original_title"
          class="movie-img"/>
    <div>
    <div class="movie-name">
      {{movie.original_title}} ({{movie.release_date}})
    </div>
    <span class="movie-overview">
      {{movie.overview}}
    </span>
      <div class="movie_buttons" v-if="!isSearch">
        <button class="btn movie-buttons-watched" @click="movieStore.toggleMovie(movie.id)">
          <span v-if="!movie.isWatched">Watched</span>
          <span v-else>Unwatched</span>
        </button>
        <button class="btn movie-buttons-delete" @click="movieStore.deleteMovie(movie.id)">
          Delete
        </button>
      </div>
    </div>
  </div>

</template>

<script setup>
import {useMovieStore} from "../stores/MovieStore.js";

const movieStore = useMovieStore();
const props = defineProps({
  movie:{
    type: Object,
    required: true,
    default:() => {}
  },
  isSearch:{
    type: Boolean,
    required: false,
    default:() => {}
  }
})
</script>