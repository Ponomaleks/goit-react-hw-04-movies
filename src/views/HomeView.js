import { useEffect, useState } from 'react';
import api from '../services/API';
import MovieList from '../components/MovieList';

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.GetTrending().then(response => {
      setMovies(response.data.results);
    });
  }, []);

  // //

  return (
    <>
      <h1>Trending today</h1>
      {movies && <MovieList data={movies} />}
    </>
  );
}
