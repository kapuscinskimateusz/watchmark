import { useEffect, useState } from "react";

import { BASE_URL } from "./App";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

export default function MovieDetails({ selectedId, onCloseMovie }) {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(`${BASE_URL}i=${selectedId}`);
        if (!res.ok)
          throw new Error("Something went wrong with fetching movie");

        const data = await res.json();
        if (data.Response === "False") throw new Error(data.Error);

        setMovie(data);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [selectedId]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="movie-details">
      <header>
        <button className="back-btn" onClick={onCloseMovie}>
          &larr;
        </button>

        <img src={movie.Poster} alt={`Poster of ${movie.Title} movie`} />

        <div>
          <h2>{movie.Title}</h2>
          <p>
            {movie.Released} &bull; {movie.Runtime}
          </p>
          <p>{movie.Genre}</p>
          <p>&#9734; {movie.imdbRating} IMDB rating</p>
        </div>
      </header>

      <section>
        <p>{movie.Plot}</p>
        <p>Starring {movie.Actors}</p>
        <p>Directed by {movie.Director}</p>
      </section>
    </div>
  );
}
