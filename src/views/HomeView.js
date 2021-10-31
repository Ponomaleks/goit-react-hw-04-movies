import { useState } from 'react';
import api from '../services/API';

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  setMovies({}, []);

  return (
    <>
      <h1>Trending today</h1>
    </>
  );
}
