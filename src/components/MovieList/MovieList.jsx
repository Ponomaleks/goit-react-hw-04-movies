import MovieCard from '../MovieCard';

export default function MovieList({ data }) {
  return (
    <ul>
      {data.map(movie => {
        return (
          <li key={movie.id}>
            <MovieCard data={movie} />
          </li>
        );
      })}
    </ul>
  );
}
