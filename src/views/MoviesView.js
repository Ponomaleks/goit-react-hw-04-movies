import { useState, useEffect } from 'react';
import api from '../services/API';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

export default function MoviesView() {
  const [movies, setMovies] = useState(null);
  const [req, setReq] = useState('');

  const handleSubmit = request => {
    if (req !== request) {
      setReq(request);
    }
  };

  useEffect(() => {
    if (req !== '') {
      api.searchMovie(req).then(response => {
        setMovies(response.data.results);
        console.log(response.data);
      });
    }
  }, [req]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {movies && <MovieList data={movies} />}
    </>
  );
}
