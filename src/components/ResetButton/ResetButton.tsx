import {genreActions, movieActions} from "../../redux/slices";
import {useAppDispatch} from "../../hooks";
import css from "./ResetButton.module.css";

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