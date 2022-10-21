import {createSlice} from "@reduxjs/toolkit";

type IState = {
    darkTheme: boolean
}

const initialState: IState = {
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