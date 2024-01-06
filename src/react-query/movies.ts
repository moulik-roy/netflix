import { UseQueryOptions } from "react-query";
import axios from "../api/axios";
import { Movie } from "../api/movie";
import { MovieGenre, movieGenreURLs } from "../utils/constants";

interface Query {
    key: string;
    url: string;
}

const queryMap = new Map<MovieGenre, Query>([
    ["NETFLIX Originals", {
        key: "netflixOriginals",
        url: movieGenreURLs.netflixOriginals
    }],
    ["Trending", {
        key: "trending",
        url: movieGenreURLs.trending
    }],
    ["Top Rated", {
        key: "topRated",
        url: movieGenreURLs.topRated
    }],
    ["Action", {
        key: "action",
        url: movieGenreURLs.action
    }],
    ["Comedy", {
        key: "comedy",
        url: movieGenreURLs.comedy
    }],
    ["Romance", {
        key: "romance",
        url: movieGenreURLs.romance
    }],
    ["Horror", {
        key: "horror",
        url: movieGenreURLs.horror
    }]
    ,
    ["Documentaries", {
        key: "documentaries",
        url: movieGenreURLs.documantaries
    }]
]);

export const moviesQO = (genre: MovieGenre): UseQueryOptions<Movie[]> => {
    const query = queryMap.get(genre);
    return {
        queryKey: [query?.key],
        queryFn: async () => query ? (await axios.get(query.url)).data.results : undefined,
        enabled: query !== undefined
    }
}