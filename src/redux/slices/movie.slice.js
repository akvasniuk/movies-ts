import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";


const initialState = {
    movies: {},
    searchMovie: "",
    selectedMovie: null,
    error: null,
    loading: false
};

const getAll = createAsyncThunk(
    "movieSlice/getAll",
    async ({page, with_genres}, {rejectedWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page, with_genres);

            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
);

const getByQuery = createAsyncThunk(
    "movieSlice/getByQuery",
    async ({query, page, selectedGenre}, {rejectedWithValue}) => {
        try {
            const {data} = await moviesService.getByName(query, page);

            if (selectedGenre) {
                const results = data.results.filter(movie => movie.genre_ids.includes(selectedGenre));
                return {...data, results};
            }

            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
)

const getById = createAsyncThunk(
    "movieSlice/getById",
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getById(id);

            return data
        } catch (e) {
            return rejectWithValue(e.response.data);
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
            state.loading = false;
        })
        .addCase(getById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getByQuery.fulfilled, (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.selectedMovie = action.payload;
            state.loading = false;
        })
        .addMatcher((action) => action.type.endsWith("rejected"), (state, action) => {
            state.error = action.payload;
            state.loading = false;
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