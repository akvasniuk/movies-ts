import {useEffect} from "react";
import {genreActions} from "../../redux/slices";
import {FormControl, MenuItem, InputLabel, Select, SelectChangeEvent} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks";

const GenresSelect = () => {
    const dispatch = useAppDispatch();
    const {genres, selectedGenre} = useAppSelector(state => state.genreReducer);

    const handleChange = (event: SelectChangeEvent) => {
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
                    value={selectedGenre || ''}
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