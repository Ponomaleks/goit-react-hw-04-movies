import { useEffect, useState } from 'react';
import { NavLink, useParams, useRouteMatch, Route } from 'react-router-dom';
import api from '../../services/API';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieReviewsSubPage from '../MovieReviewsSubPage/MovieReviewsSubPage';
import MovieCastSubPage from '../MovieCastSubPage/MovieCastSubPage';

export default function MovieDetailsView() {
  const match = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api.GetMovieDetails(movieId).then(resp => setMovie(resp.data));
  }, [movieId]);

  return (
    <>
      {movie && <MovieDetails data={movie} />}
      <hr />
      <h4>Additional information</h4>
      <NavLink
        style={{ paddingLeft: '20px' }}
        activeStyle={{ color: 'brown' }}
        to={`${match.url}/cast`}
      >
        Cast
      </NavLink>
      <NavLink
        style={{ paddingLeft: '20px' }}
        activeStyle={{ color: 'brown' }}
        to={`${match.url}/reviews`}
      >
        Reviews
      </NavLink>
      <hr />
      <Route path={`/movies/${movieId}/cast`}>
        <MovieCastSubPage id={movieId} />
      </Route>
      <Route path={`/movies/${movieId}/reviews`}>
        <MovieReviewsSubPage id={movieId} />
      </Route>
    </>
  );
}
