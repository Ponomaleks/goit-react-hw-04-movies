import { useEffect, useState } from 'react';
import api from '../../services/API';
import Review from '../../components/Review';

export default function MovieReviewsSubPage({ id }) {
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    api.GetMovieReviews(id).then(response => {
      setReviews(response.data.results);
    });
  }, [id]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map((el, idx) => {
            return (
              <li key={idx}>
                <Review review={el}></Review>
              </li>
            );
          })}
        </ul>
      )}
      {reviews.length === 0 && <h4>No any review yet...</h4>}
    </>
  );
}
