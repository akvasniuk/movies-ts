import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {FormControl, MenuItem, InputLabel, Select} from "@mui/material";

import {genreActions} from "../../redux/slices";

const GenresSelect = () => {
    const dispatch = useDispatch();
    const {genres, selectedGenre} = useSelector(state => state.genreReducer);

    const handleChange = (event) => {
        dispatch(genreActions.getSelectedGenre(event.target.value));
    };

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch])

    return (
        <div>
            <FormControl sx={{
                minWidth: 100,
            }}>
                <InputLabel>Genre</InputLabel>
                <Select
                    value={selectedGenre || ""}
                    label="Genre"
                    autoWidth
                    onChange={handleChange}
                >
                    {
                        genres.map(genre => <MenuItem key={genre.id} value={genre.id}>{genre.name}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </div>
    );
};

export {GenresSelect};