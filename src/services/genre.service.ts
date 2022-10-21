import {AxiosRes, axiosService} from "./axios.service";

import {urls} from "../configs";
import {IGenre} from "../interfaces";

type IGenres = {
    genres: IGenre[]
}

const genreService = {
    getAll: (): AxiosRes<IGenres> => axiosService.get(urls.genres)
}

export {
    genreService
}