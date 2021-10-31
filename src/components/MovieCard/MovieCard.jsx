export default function MovieCard({ data: { poster_path, original_title, title, release_date } }) {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={original_title} />
      <p>{title}</p>
      <p>{release_date.slice(0, 4)}</p>
    </>
  );
}
