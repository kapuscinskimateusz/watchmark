import WatchedListItem from "./WatchedListItem";

export default function WatchedList({ watched, onDeleteWatched }) {
  return (
    <ul className="list watched-list">
      {watched.map((movie) => (
        <WatchedListItem
          key={movie.imdbID}
          movie={movie}
          onDelete={onDeleteWatched}
        />
      ))}
    </ul>
  );
}
