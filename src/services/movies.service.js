import {axiosService} from "./axios.service";

import {urls} from "../configs";

const moviesService = {
    getAll: (page, with_genres) =>
        axiosService.get(urls.movies, {params: {page, with_genres}}),
    getByName: (query, page = 1) =>
        axiosService.get(urls.movie_search, {params: {query, page}}),
    getById: (id) => axiosService.get(`${urls.movie}/${id}`)
}

export {
    moviesService
}