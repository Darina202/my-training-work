import WatchedMoviesItem from "./WatchedMoviesItem";

export default function WatchedMoviesList({ watched }) {
  return (
    <ul className="pop-list">
      {watched.map((movie) => (
        <WatchedMoviesItem movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
