import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {moviesService} from "../../services";
import {IMovie, IMovies} from "../../interfaces";

interface IState {
    movies: Partial<IMovies>,
    searchMovie: string,
    selectedMovie: Partial<IMovie>,
    error: string,
}


interface IGetAll {
    page: number,
    with_genres: string
}

interface IGetByQuery {
    query: string,
    page: number,
    selectedGenre: string,
}

type IGetById = {
    id: string
}

const initialState: IState = {
    movies: {},
    searchMovie: "",
    selectedMovie: {},
    error: ""
};


const getAll = createAsyncThunk<IMovies, IGetAll, { rejectValue?: string }>(
    "movieSlice/getAll",
    async ({page, with_genres}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page, with_genres);

            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const getByQuery = createAsyncThunk<IMovies, IGetByQuery, { rejectValue?: string }>(
    "movieSlice/getByQuery",
    async ({query, page, selectedGenre}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getByName(query, page);

            if (selectedGenre) {
                const results = data.results.filter(movie => movie.genre_ids.includes(+selectedGenre));
                return {...data, results};
            }

            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)

const getById = createAsyncThunk<IMovie, IGetById, { rejectValue?: string }>(
    "movieSlice/getById",
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getById(id);

            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)


const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        getMovieBySearch: (state, action) => {
            state.searchMovie = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload;
        })
        .addCase(getByQuery.fulfilled, (state, action) => {
            state.movies = action.payload;
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.selectedMovie = action.payload;
        })
        .addMatcher((action) => action.type.endsWith("rejected"), (state, action) => {
            state.error = action.payload;
        })
});

const {reducer: movieReducer, actions: {getMovieBySearch}} = movieSlice;

const movieActions = {
    getAll,
    getByQuery,
    getMovieBySearch,
    getById
}

export {
    movieReducer,
    movieActions
}