import {Rating, Stack} from "@mui/material";

const StarsRating = ({vote_average}) => {
    return (
        <>
            <Stack spacing={1}>
                <Rating name="half-rating"
                        value={vote_average
                            ? vote_average
                            : 0}
                        max={10}
                        sx={{
                            '& .MuiRating-iconFilled': {
                                color: '#544C21',
                            },
                            '& .MuiRating-iconFocus': {
                                color: 'orange',
                            },
                            '& .MuiRating-iconHover': {
                                color: 'gray',
                            }
                        }}/>
            </Stack>
        </>
    );
};

export {StarsRating};