import {defineStore} from 'pinia';
import {ref, computed} from "vue";

// export const useMovieStore = defineStore("movieStore", {
//     state: () => ({
//         movies:[],
//         activeTab: 2
//     }),
//     getters: {
//         watchedMovies(){
//             return this.movies.filter((el)=> el.isWatched)
//         },
//         totalCount(){
//             return this.movies.length
//         }
//     },
//     actions:{
//       setActive(id){
//           this.activeTab = id
//       },
//     toggleMovie(id){
//             const index = this.movies.findIndex((el) => el.id === id)
//             this.movies[index].isWatched = !this.movies[index].isWatched
//         },
//     deleteMovie(id){
//           this.movies = this.movies.filter((el) => el.id !== id);
//         }
//     }
// });

export const useMovieStore = defineStore("movieStore", () => {
    const movies = ref([]);
    const activeTab = ref(2)

    const watchedMovies = computed(() => {
        return movies.value.filter((el)=> el.isWatched)
    })

    const totalCount = computed(() => {
        return movies.value.length
    })

    const setActive = (id) => {
        activeTab.value = id
    }
    const toggleMovie = (id) => {
        const index = movies.value.findIndex((el) => el.id === id)
        movies.value[index].isWatched = !movies.value[index].isWatched
    }
    const deleteMovie = (id) => {
        movies.value = movies.value.filter((el) => el.id !== id);
    }
    return {
        movies,
        activeTab,
        watchedMovies,
        totalCount,
        setActive,
        toggleMovie,
        deleteMovie
    }
})
