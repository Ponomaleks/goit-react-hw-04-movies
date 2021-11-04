import noimage from '../../noimage.webp';
import s from './MovieCard.module.css';

export default function MovieCard({ data: { poster_path, original_title, title, release_date } }) {
  return (
    <>
      <img
        src={poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : noimage}
        alt={original_title}
      />
      <div>
        <p className={s.card__title}>{title}</p>
        <p className={s.card__date}>{release_date && release_date.slice(0, 4)}</p>
        {/* <img src={noimage} alt={original_title}></img> */}
      </div>
    </>
  );
}
