import {defineStore} from 'pinia';
import {ref, computed, watch} from "vue";

export const useMovieStore = defineStore("movieStore", () => {
    const movies = ref([]);
    const activeTab = ref(2)

    const dataInLocalStorage = localStorage.getItem("movies");
    if (dataInLocalStorage){
        movies.value = JSON.parse(dataInLocalStorage)._value
        console.log(JSON.parse(dataInLocalStorage))
    }

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

    watch(()=> movies, (state) => {
        localStorage.setItem('movies', JSON.stringify(state))
    }, {deep: true})

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
