import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import api from '../services/API';

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api.GetMovieDetails(movieId).then(resp => setMovie(resp.data));
  }, [movieId]);
  //

  return <>{movie && <MovieDetails data={movie} />}</>;
}
