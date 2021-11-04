import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../services/API';
import MovieList from '../../components/MovieList';

export default function HomeView() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    api.GetTrending().then(response => {
      setMovies(response.data.results);
    });
  }, []);

  // //

  return (
    <>
      <h1 style={{ marginBottom: '10px' }}>Trending today</h1>
      {movies && <MovieList data={movies} url={'movies'} location={location} />}
    </>
  );
}
