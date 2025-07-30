import MovieListItem from "./MovieListItem";

export default function MovieList({ movies }) {
  return (
    <ul className="pop-list">
      {movies?.map((movie) => (
        <MovieListItem movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
