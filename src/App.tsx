import {Navigate, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material";

import {MainLayout} from "./layouts/MainLayout";
import {MoviePage, MoviesPage, NotFoundPage} from "./pages";
import {useAppSelector, useAppTheme} from "./hooks";

import {darkTheme, lightTheme} from "./constants";

function App() {
    const theme = useAppSelector(state => state.themeReducer);

    const switchedTheme = useAppTheme();

    return (
        <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
            <div style={switchedTheme}>
                <Routes>
                    <Route path={"/"} element={<MainLayout/>}>
                        <Route index element={<Navigate to={"movies"}/>}/>
                        <Route path={"movies"} element={<MoviesPage/>}/>
                        <Route path={"movies/:id"} element={<MoviePage/>}/>
                        <Route path={"*"} element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
