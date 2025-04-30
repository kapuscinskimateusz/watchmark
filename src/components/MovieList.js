import MovieListItem from "./MovieListItem";

export default function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list movie-list">
      {movies.map((movie) => (
        <MovieListItem
          key={movie.imdbID}
          movie={movie}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
}
