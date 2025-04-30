export default function WatchedListItem({ movie, onDelete }) {
  return (
    <li className="list-item watched-list-item">
      <img src={movie.poster} alt={`Poster of ${movie.title} movie`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>&#9734;</span>
          <span>{movie.imdbRating}</span>
        </p>

        <button className="btn-delete" onClick={() => onDelete(movie.imdbID)}>
          X
        </button>
      </div>
    </li>
  );
}
