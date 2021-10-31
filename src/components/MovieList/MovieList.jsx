import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard';

export default function MovieList({ data }) {
  return (
    <ul>
      {data.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <MovieCard data={movie} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
