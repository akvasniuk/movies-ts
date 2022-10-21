import {useEffect} from "react";

import {MovieDetails} from "../../components";
import {movieActions} from "../../redux/slices";
import {useAppDispatch, useAppParams, useAppSelector} from "../../hooks";

const MoviePage = () => {
    const {id} = useAppParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getById({id: id as string}));
    }, [dispatch, id]);

    const {selectedMovie} = useAppSelector(state => state.movieReducer);

    return (
        <div>
            {selectedMovie && <MovieDetails/>}
        </div>
    );
};

export {MoviePage};