import { useState, useEffect } from 'react';
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import api from '../../services/API';
import SearchBar from '../../components/SearchBar';
import MovieList from '../../components/MovieList';

export default function MoviesView() {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [movies, setMovies] = useState(null);
  const [req, setReq] = useState(query ?? '');

  const { url } = useRouteMatch();
  console.log(query);
  const handleSubmit = request => {
    if (req !== request) {
      setReq(request);
    }
    history.push({ ...location, search: `query=${request}` });
  };

  useEffect(() => {
    if (req !== '') {
      api.searchMovie(req).then(response => {
        setMovies(response.data.results);
      });
    }
  }, [req]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {movies && <MovieList data={movies} url={url} location={location} />}
    </>
  );
}
