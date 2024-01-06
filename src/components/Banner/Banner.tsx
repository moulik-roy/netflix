import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Movie } from "../../api/movie";
import { moviesQO } from "../../react-query/movies";
import "./Banner.css";

const Banner: React.FC = () => {
  const moviesQuery = useQuery(moviesQO("NETFLIX Originals"));
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    if (moviesQuery.data) {
      setMovie(moviesQuery.data[Math.floor(Math.random() * moviesQuery.data.length)])
    }
  }, [moviesQuery.data]);

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `${movie ? `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` : undefined}`,
        backgroundPosition: "center center"
      }}>
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>

        <h1 className="banner-description">
          {movie?.overview}
        </h1>
      </div>
      <div className="banner-fade"/>
    </header>
  );
};

export default Banner;