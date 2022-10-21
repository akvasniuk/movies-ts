import {useDispatch} from "react-redux";

import {genreActions, movieActions} from "../../redux/slices";
import css from "./ResetButton.module.css";

const ResetButton = () => {
    const dispatch = useDispatch();

    const reset = () => {
        dispatch(movieActions.getMovieBySearch(""));
        dispatch(genreActions.getSelectedGenre(""));
    }

    return (
        <button className={css.button} onClick={reset}>
            Reset
        </button>
    );
};

export {ResetButton};