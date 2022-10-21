const baseURL = process.env.REACT_APP_API_URL
const imageURL = "https://image.tmdb.org/t/p/w500";

const urls = {
    movies: "/discover/movie",
    genres: "/genre/movie/list",
    movie_search: "/search/movie",
    movie: "/movie"
}

export {
    baseURL,
    urls,
    imageURL
}