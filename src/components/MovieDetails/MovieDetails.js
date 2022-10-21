import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {imageURL} from "../../configs";
import {StarsRating, GenreBadge, Company} from "../../components";
import {useAppTheme} from "../../hooks";
import css from "./MovieDetails.module.css";

const MovieDetails = () => {
    const {selectedMovie} = useSelector(state => state.movieReducer);

    const theme = useAppTheme();
    const navigate = useNavigate();

    const {
        backdrop_path, tagline, title, runtime, genres,
        original_language, vote_average, release_date,
        status, popularity, overview, production_companies
    } = selectedMovie;

    const backgroundImage = backdrop_path ? `${imageURL}/${backdrop_path}` : "";

    return (
        <div className={css.movieCard}>
            <button className={css.button} onClick={() => navigate(-1)}>Previous page</button>
            <div className={css.container} style={theme}>

                <div className={css.hero}
                     style={{background: `url(${backgroundImage}) 0 0 / 800px 500px no-repeat`}}>

                    <div className={css.details}>

                        <div className={css.title1}>{title}
                        </div>

                        <div className={css.title2}>{tagline}
                            <span className={css.span}>{original_language}</span>
                            <span className={css.span}>runtime {runtime}</span>
                        </div>

                        <div className={css.title2}>
                            <StarsRating vote_average={vote_average}/>
                        </div>
                    </div>
                </div>

                <div className={css.description}>
                    <div className={css.column1}>
                        <GenreBadge receivedGenres={genres.map(genre => genre.id)}/>
                        <p>
                            Release data {release_date}
                        </p>
                        <p>
                            {status}
                        </p>
                        <p>
                            Popularity {popularity}
                        </p>
                    </div>

                    <div className={css.column2}>
                        <p>{overview}</p>
                    </div>
                </div>
                <h4 className={css.center}>Companies</h4>
                <div className={css.companies}>
                    {
                        production_companies.map(company =>
                            <Company key={company.id} name={company.name} logo_path={company.logo_path}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export {MovieDetails};
