import css from "./Movie.module.css";
import {PosterPreview, GenreBadge} from "../../components";
import {useNavigate} from "react-router-dom";
import {useAppTheme} from "../../hooks";
import {IMovie} from "../../interfaces";
import {FC} from "react";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {
        title, vote_average, release_date, backdrop_path, id,
        popularity, overview, original_language, genre_ids
    } = movie;

    const navigate = useNavigate();

    const theme = useAppTheme();

    return (
        <div>
            <div className={css.main_card} style={theme}>
                <div className={css.card_left}>
                    <div className={css.card_details}>
                        <h1>{title}</h1>
                        <div className={css.card_cat}>
                            <p className={css.PG}>{vote_average}</p>
                            <p className={css.year}>{release_date}</p>
                            {genre_ids && <GenreBadge receivedGenres={genre_ids}/>}
                            <p className={css.time}>{popularity}</p>
                        </div>
                        <p className={css.disc}>{overview}</p>
                        <span>Read More</span>
                        <div className={css.socialBtn}>
                            <button className={css.button}>
                                <i>
                                    SEE TRAILER
                                </i>
                            </button>
                            <button className={css.button}>
                                <i>
                                    DOWNLOAD
                                </i>
                            </button>
                            <button className={css.button}>
                                <i>
                                    {original_language.toUpperCase()}
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={css.card_right} onClick={() => navigate(`${id}`)}>
                    <PosterPreview backdrop_path={backdrop_path} title={title} id={id}/>
                </div>
            </div>
        </div>
    );
};

export {Movie};