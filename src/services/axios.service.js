import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer ${process.env.REACT_APP_API_TOKEN}`;

    return config;
})

export {
    axiosService
}