import { useEffect, useState } from 'react';
import api from '../../services/API';
import CastCard from '../../components/CastCard/CastCard';

export default function MovieCastSubPage({ id }) {
  const [cast, setCast] = useState('');

  useEffect(() => {
    api.GetMovieCredits(id).then(response => {
      console.log(response);
      setCast(response.data.cast);
    });
  }, [id]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(el => {
            return (
              <li key={el.id}>
                <CastCard actor={el}></CastCard>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
