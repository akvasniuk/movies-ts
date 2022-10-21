import {FC, useEffect} from "react";

import {genreActions} from "../../redux/slices";

import css from "./GenreBadge.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks";

interface IProps {
    receivedGenres: number[]
}

const GenreBadge: FC<IProps> = ({receivedGenres}) => {
    const dispatch = useAppDispatch();
    const {genres, error} = useAppSelector(state => state.genreReducer);

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