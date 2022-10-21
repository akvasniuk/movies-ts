import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {genreService} from "../../services";
import {IGenre} from "../../interfaces";

interface IState {
    genres: IGenre[],
    selectedGenre: string,
    error: string | null
}

const initialState: IState = {
    genres: [],
    selectedGenre: "",
    error: null
}

const getAll = createAsyncThunk<IGenre[], void, { rejectValue?: string }>(
    "genreSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();

            return data.genres;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)

const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {
        getSelectedGenre: (state, action) => {
            state.selectedGenre = action.payload;
        }
    },
    extraReducers: builder =>
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.genres = action.payload;
        })
            .addMatcher((action) => action.type.endsWith("rejected"), (state, action) => {
                state.error = action.payload;
            })
})

const {reducer: genreReducer, actions: {getSelectedGenre}} = genreSlice;

const genreActions = {
    getAll,
    getSelectedGenre
}

export {
    genreActions,
    genreReducer
}