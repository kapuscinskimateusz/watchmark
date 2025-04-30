export default function WatchedSummary({ watched }) {
  return (
    <div className="watched-summary">
      <h2>Movies you watched</h2>
      <div>
        <p>{watched.length} movies</p>
      </div>
    </div>
  );
}
