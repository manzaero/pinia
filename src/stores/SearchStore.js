import { defineStore } from "pinia";
import {useMovieStore} from "./MovieStore.js";
import axios from "axios";

const url = 'https://api.themoviedb.org/3/search/movie?api_key=18fd9b8cef6e0d8cbb9e5efdf65774ec&query=';

export const useSearchStore = defineStore("searchStore", {
    state: () => ({
        loader: false,
        movies: []
    }),
    actions: {
        async getMovie(search) {
            this.loader = true;
            let res = await axios(`${url}${search}`)
            console.log(res.data)
            this.movies = res.data.results
            this.loader = false
        },
        addToMovies(object){
            const movieStore = useMovieStore();
            movieStore.movies.push(object)
            console.log(object)
        }
    }
})