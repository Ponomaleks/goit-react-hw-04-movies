import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard';
import s from './MovieList.module.css';

export default function MovieList({ data, url, location }) {
  return (
    <ul className={s.gallery__list}>
      {data.map(movie => {
        return (
          <li className={s.list__elem} key={movie.id}>
            <Link
              to={{
                pathname: `${url}/${movie.id}`,
                state: { from: location },
              }}
              className={s.card__link}
            >
              <MovieCard data={movie} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
