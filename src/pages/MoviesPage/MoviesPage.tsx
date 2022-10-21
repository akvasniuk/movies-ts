import {
    Pagination,
    PaginationItem,
    Stack
} from "@mui/material";
import {Link as NavLink, useNavigate, useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect, useState} from "react";

import {movieActions} from "../../redux/slices";
import {Movies} from "../../components";

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const {movies, error, searchMovie} =
        useAppSelector(state => state.movieReducer);
    const {selectedGenre} = useAppSelector(state => state.genreReducer);

    const location = useLocation();
    const navigation = useNavigate();

    const [page, setPage] = useState<number>(
        parseInt(location.search?.split("=")[1] || "1"));
    const [pageQty, setPageQty] = useState<number>(1);

    useEffect(() => {
        if (searchMovie) {
            dispatch(movieActions.getByQuery({query: searchMovie, page, selectedGenre}));
        } else {
            dispatch(movieActions.getAll({page, with_genres: selectedGenre}));
        }

        setPageQty(movies.total_pages || 1);

        if (movies.total_pages && movies.total_pages < page) {
            setPage(1);
            navigation("/", {replace: true})
        }
    }, [searchMovie, selectedGenre, page, dispatch, location,
        navigation, movies.total_pages]);

    return (
        <>
            <Stack spacing={1}>
                {!!pageQty && (
                    <Pagination
                        count={pageQty}
                        page={page}
                        onChange={(_, num) => setPage(num)}
                        showFirstButton
                        showLastButton
                        sx={{marginY: 2, marginX: "auto"}}
                        renderItem={(item) => (
                            <PaginationItem
                                component={NavLink}
                                to={`?page=${item.page}`}
                                {...item}
                            />
                        )}
                    />
                )}

                {movies.results && <Movies movies={movies.results} error={error}/>}
            </Stack>
        </>
    );
};

export {MoviesPage};