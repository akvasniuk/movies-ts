import {Movie} from "../Movie/Movie";

import "./Movies.module.css";

const Movies = ({movies, error}) => {

    return (
        <div>
            {error && <h1>Error</h1>}
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};