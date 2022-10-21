import {useParams} from "react-router-dom";

type IMovieParams = {
    id: string;
}

const useAppParams = useParams<IMovieParams>;

export {
    useAppParams
}