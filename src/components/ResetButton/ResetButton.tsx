import {genreActions, movieActions} from "../../redux/slices";
import css from "./ResetButton.module.css";
import {useAppDispatch} from "../../hooks";

const ResetButton = () => {
    const dispatch = useAppDispatch();

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