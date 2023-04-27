import { defineStore } from "pinia";
import {ref} from "vue";
import {useMovieStore} from "./MovieStore.js";
import axios from "axios";

const url = 'https://api.themoviedb.org/3/search/movie?api_key=18fd9b8cef6e0d8cbb9e5efdf65774ec&query=';

export const useSearchStore = defineStore("searchStore", () => {
    const loader = ref(false);
    const movies = ref([]);

    const getMovie = async(search) => {
        loader.value = true;
        let res = await axios(`${url}${search}`)
        console.log(res.data)
        movies.value = res.data.results
        loader.value = false
    };

    const addToMovies = (object) => {
        const movieStore = useMovieStore();
        movieStore.movies.push({...object, isWatched: false});
        setTimeout(()=> movieStore.activeTab = 1,500)
        console.log(object)
    }
    return {
        loader,
        movies,
        getMovie,
        addToMovies
    }
})