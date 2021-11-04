import noimage from '../../noimage.webp';

export default function MovieDetails({
  data: { poster_path, original_title, overview, release_date, vote_average, genres },
}) {
  const genresNames = genres.length > 0 ? genres.map(item => item.name).join(', ') : 'no data';
  const score = vote_average * 10;
  const releaseYear = release_date.slice(0, 4);

  return (
    <div>
      <img
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : noimage}
        alt={original_title}
      ></img>
      <div>
        <h1>
          {original_title} {releaseYear ? `(${releaseYear})` : ''}
        </h1>
        <span>User Score: {score}%</span>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres:</h3>
        <p>{genresNames}</p>
      </div>
    </div>
  );
}
