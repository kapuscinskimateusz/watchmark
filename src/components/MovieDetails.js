import { useEffect, useState } from "react";

import { BASE_URL } from "./App";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import StarRating from "./StarRating";

export default function MovieDetails({
  selectedId,
  watched,
  onCloseMovie,
  onAddWatched,
}) {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [userRating, setUserRating] = useState(0);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      imdbRating: movie.imdbRating,
      userRating,
      runtime: movie.Runtime,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

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
        <button className="btn-back" onClick={onCloseMovie}>
          &larr;
        </button>

        <img src={movie.Poster} alt={`Poster of ${movie.Title} movie`} />

        <div>
          <h2>{movie.Title}</h2>
          <p>
            {movie.Released} &bull; {movie.Runtime}
          </p>
          <p>{movie.Genre}</p>
          <p>⭐ {movie.imdbRating} IMDB rating</p>
        </div>
      </header>

      <section>
        {isWatched ? (
          <p>You rated this movie {watchedUserRating} 🌟</p>
        ) : (
          <div>
            <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
            {userRating > 0 && (
              <button onClick={handleAdd}>+ Add to watched</button>
            )}
          </div>
        )}

        <br />

        <p>
          <em>{movie.Plot}</em>
        </p>
        <p>Starring {movie.Actors}</p>
        <p>Directed by {movie.Director}</p>
      </section>
    </div>
  );
}
