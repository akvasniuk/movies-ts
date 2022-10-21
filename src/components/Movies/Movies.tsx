import {Movie} from "../Movie/Movie";

import "./Movies.module.css";
import {IMovie} from "../../interfaces";
import {FC} from "react";

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