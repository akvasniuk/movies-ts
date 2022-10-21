import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState = {
    genres: [],
    selectedGenre: "",
    error: null
}

const getAll = createAsyncThunk(
    "genreSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();

            return data
        } catch (e) {
            return rejectWithValue(e.response.data);
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
            state.genres = action.payload.genres;
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