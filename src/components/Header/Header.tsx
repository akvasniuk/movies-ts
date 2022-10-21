import css from "./Header.module.css"
import {TextField} from "@mui/material";
import {movieActions} from "../../redux/slices";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector, useAppTheme} from "../../hooks";
import logoImage from "../../assets/logo.png";
import {ResetButton, GenresSelect, UserInfo, ToggleSwitch} from "../../components";


const Header = () => {
    const dispatch = useAppDispatch();
    const {searchMovie} = useAppSelector(state => state.movieReducer);
    const navigate = useNavigate();
    const theme = useAppTheme();

    return (
        <div className={css.header} style={theme}>
            <div className={[css.head, css.wrap].join(" ")} style={theme}>
                <div className={css.logo} onClick={() => navigate("/", {replace: true})}>
                    <img src={logoImage} alt="movie logo"/>
                </div>
                <GenresSelect/>
                <TextField
                    sx={{width: 400, textAlign: "center"}}
                    label="Name"
                    value={searchMovie}
                    onChange={(event) => dispatch(movieActions.getMovieBySearch(event.target.value))}
                />
                <ResetButton/>
                <UserInfo/>
                <ToggleSwitch/>
            </div>
        </div>
    );
};

export {Header};