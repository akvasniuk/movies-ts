import {AxiosRes, axiosService} from "./axios.service";

import {urls} from "../configs";
import {IMovie, IMovies} from "../interfaces";

const moviesService = {
    getAll: (page: number, with_genres: string): AxiosRes<IMovies> =>
        axiosService.get(urls.movies, {params: {page, with_genres}}),
    getByName: (query: string, page: number): AxiosRes<IMovies> =>
        axiosService.get(urls.movie_search, {params: {query, page}}),
    getById: (id: string): AxiosRes<IMovie> => axiosService.get(`${urls.movie}/${id}`)
}

export {
    moviesService
}