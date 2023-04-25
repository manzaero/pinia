import {defineStore} from 'pinia';

export const useMovieStore = defineStore("movieStore", {
    state: () => ({
        movies:[],
        activeTab: 2,
    }),
    getters: {
        watchedMovies(){
            return this.movies.filter((el)=> el.isWatched === true)
        },
        totalCount(){
            return this.movies.length
        }
    },
    actions:{
      setActive(id){
          this.activeTab = id
      },
        toggleMovie(id){
            const index = this.movies.findIndex(el => el.id === id)
            this.movies[index].isWatched = !this.movies[index].isWatched
        },
        deleteMovie(id){
          this.movies = this.movies .filter(el => el.id !== id)
        }
    }
});