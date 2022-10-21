import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices";
import {useNavigate} from "react-router-dom";

import {ResetButton, GenresSelect, UserInfo, ToggleSwitch} from "../../components";
import {useAppTheme} from "../../hooks";
import css from "./Header.module.css"
import logoImage from "../../assets/logo.png";

const Header = () => {
    const dispatch = useDispatch();
    const {searchMovie} = useSelector(state => state.movieReducer);
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