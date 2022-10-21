import {useEffect} from "react";

import {useParams} from "react-router-dom";
import {MovieDetails} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices";

const MoviePage = () => {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getById({id: params.id}));
    }, [dispatch, params.id]);

    const {selectedMovie} = useSelector(state => state.movieReducer);

    return (
        <div>
            {selectedMovie && <MovieDetails/>}
        </div>
    );
};

export {MoviePage};