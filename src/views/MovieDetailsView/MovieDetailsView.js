import { useEffect, useState, lazy, Suspense } from 'react';
import {
  NavLink,
  useParams,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import api from '../../services/API';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
// import MovieReviewsSubPage from '../MovieReviewsSubPage/MovieReviewsSubPage';
// import MovieCastSubPage from '../MovieCastSubPage/MovieCastSubPage';
const MovieReviewsSubPage = lazy(() =>
  import(
    '../MovieReviewsSubPage/MovieReviewsSubPage.js' /* webpackChunkName: "MovieReviewsSubPage" */
  ),
);
const MovieCastSubPage = lazy(() =>
  import('../MovieCastSubPage/MovieCastSubPage.js' /* webpackChunkName: "MovieCastSubPage" */),
);

export default function MovieDetailsView() {
  const match = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const history = useHistory();
  console.log(history);
  console.log(location);

  useEffect(() => {
    api.GetMovieDetails(movieId).then(resp => setMovie(resp.data));
  }, [movieId]);

  const handleClick = () => history.push(location?.state?.from ?? '/');

  return (
    <>
      <button type="button" onClick={handleClick}>
        {' '}
        &#8592; Go back
      </button>

      {movie && <MovieDetails data={movie} />}
      <hr />
      <h4>Additional information</h4>
      <NavLink
        style={{ paddingLeft: '20px' }}
        activeStyle={{ color: 'brown' }}
        to={{
          pathname: `${match.url}/cast`,
          state: { from: location.state ? location.state.from : '/' },
        }}
      >
        Cast
      </NavLink>
      <NavLink
        style={{ paddingLeft: '20px' }}
        activeStyle={{ color: 'brown' }}
        to={{
          pathname: `${match.url}/reviews`,
          state: { from: location.state ? location.state.from : '/' },
        }}
      >
        Reviews
      </NavLink>
      <hr />
      <Suspense fallback={<h2>Загрузка</h2>}>
        <Route path={`/movies/${movieId}/cast`}>
          <MovieCastSubPage id={movieId} />
        </Route>
        <Route path={`/movies/${movieId}/reviews`}>
          <MovieReviewsSubPage id={movieId} />
        </Route>
      </Suspense>
    </>
  );
}
