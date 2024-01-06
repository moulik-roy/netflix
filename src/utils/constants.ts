export const TMDBBaseURL = "https://api.themoviedb.org/3";

export const imageBaseURL = "https://image.tmdb.org/t/p/original/";

export type MovieGenre = "NETFLIX Originals" | "Trending" | "Top Rated" | "Action" | "Comedy" | "Romance" | "Horror" | "Documentaries";

export const movieGenreURLs = {
    netflixOriginals: `/discover/tv?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_networks=213`,
    trending: `/trending/all/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`,
    topRated: `/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`,
    action: `/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=28`,
    comedy: `/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=35`,
    romance: `/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=10749`,
    horror: `/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=27`,
    documantaries: `/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=99`
}