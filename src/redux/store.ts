import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, themeReducer} from "./slices";

const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
    themeReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
}