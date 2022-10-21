import {FC} from "react";

import {Movie} from "../Movie/Movie";
import {IMovie} from "../../interfaces";
import "./Movies.module.css";

interface IProps {
    movies: IMovie[],
    error: string
}

const Movies: FC<IProps> = ({movies, error}) => {

    return (
        <div>
            {error && <h1>Error</h1>}
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};