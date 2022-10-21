import axios, {AxiosResponse} from "axios";

import {baseURL} from "../configs";

export type AxiosRes<T> = Promise<AxiosResponse<T>>

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    config.headers = config.headers ?? {};

    config.headers['Authorization'] = `Bearer ${process.env.REACT_APP_API_TOKEN}`;

    return config;
})

export {
    axiosService
}