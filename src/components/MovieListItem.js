export default function MovieListItem({ movie, onSelectMovie }) {
  return (
    <li
      className="list-item movie-list-item"
      onClick={() => onSelectMovie(movie.imdbID)}
    >
      <img src={movie.Poster} alt={`Poster of ${movie.Title} movie`} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </li>
  );
}
