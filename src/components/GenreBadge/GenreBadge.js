import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux/slices";
import css from "./GenreBadge.module.css";

const GenreBadge = ({receivedGenres}) => {
    const dispatch = useDispatch();
    const {genres, error} = useSelector(state => state.genreReducer);

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch])


    const genresFiltered = genres.filter(genre => receivedGenres.includes(genre.id));

    return (
        <div>
            {error && <h1>Error</h1>}
            {
                genresFiltered.map(genre => <p className={css.genre} key={genre.id}>{genre.name}</p>)
            }
        </div>
    );
};

export {GenreBadge};