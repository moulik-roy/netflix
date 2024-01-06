import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Movie } from "../../api/movie";
import { imageBaseURL, MovieGenre } from "../../utils/constants";
import { moviesQO } from "../../react-query/movies";
import "./Genre.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

interface Props {
  title: MovieGenre;
  focus?: boolean;
}

const Genre: React.FC<Props> = ({ title, focus }) => {
  const moviesQuery = useQuery(moviesQO(title));
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieTrailerId, setMovieTrailerId] = useState<string>();

  useEffect(() => {
    setMovies([]);
    if (moviesQuery.data) {
      setMovies(moviesQuery.data);
    }
  }, [moviesQuery.data]);

  const showMovieTrailer = (movie: Movie) => {
    if (movieTrailerId)
      setMovieTrailerId(undefined);
    else {
      movieTrailer(null, {tmdbId: movie.id})
        .then((url: string | URL | null) => setMovieTrailerId(url ? new URLSearchParams(new URL(url).search).get("v") ?? undefined : undefined))
    }
  }

  return (
    <div className="genre">
      <h2>{title}</h2>
      <div className="movies">
        {movies.map(movie => (
          <img
            className={`movie_poster ${focus && "movie_poster_focus"}`}
            key={movie.id}
            onClick={() => showMovieTrailer(movie)}
            src={`${imageBaseURL}${focus ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {movieTrailerId && <YouTube videoId={movieTrailerId} opts={{ height: 390, width: "100%", playerVars: { autoplay: 1 } }} />}
    </div>
  );
};

export default Genre;