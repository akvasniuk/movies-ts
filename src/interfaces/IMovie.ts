interface IProductionCompany {
    name: string,
    logo_path: string,
    id: number
}

interface IGenre {
    id: number,
    name: string
}

export interface IMovie {
    title: string,
    vote_average: number,
    release_date: string,
    backdrop_path: string,
    id: number,
    popularity: number,
    overview: number,
    original_language: string,
    genre_ids: number[],
    tagline?: string,
    genres?: IGenre[],
    production_companies?: IProductionCompany[],
    status?: number,
    runtime?: number,
    total_pages?: number
}

export interface IMovies {
    page: number,
    results: IMovie[],
    total_pages: number
}