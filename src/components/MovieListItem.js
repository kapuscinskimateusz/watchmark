export default function MovieListItem({ movie, onSelectMovie }) {
  return (
    <li className="movie-list-item" onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`Poster of ${movie.Title} movie`} />
      <div>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </li>
  );
}
