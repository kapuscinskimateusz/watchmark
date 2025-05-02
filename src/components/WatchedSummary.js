function calcAverage(arr) {
  if (arr.length === 0) return 0;

  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

export default function WatchedSummary({ watched }) {
  const imdbRatingAvg = calcAverage(watched.map((movie) => movie.imdbRating));
  const userRatingAvg = calcAverage(watched.map((movie) => movie.userRating));
  const runtimeAvg = calcAverage(watched.map((movie) => movie.runtime));

  return (
    <div className="watched-summary">
      <h2>Movies you watched</h2>
      <div>
        <p>{watched.length} movies</p>
        <p>
          <span>⭐</span>
          <span>{imdbRatingAvg.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{userRatingAvg.toFixed(2)}</span>
        </p>
        <p>
          <span>⌛</span>
          <span>{runtimeAvg.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
}
