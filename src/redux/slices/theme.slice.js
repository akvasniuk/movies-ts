import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    darkTheme: false
}

const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkTheme = !state.darkTheme;
        }
    }
});

const {reducer: themeReducer, actions: {toggleTheme}} = themeSlice;

const themeAction = {
    toggleTheme
}

export {
    themeReducer,
    themeAction
}