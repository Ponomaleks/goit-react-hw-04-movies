export default function CastCard({ actor: { character, name, profile_path } }) {
  return (
    <>
      <h4>{name}</h4>
      <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name}></img>
      <p>as {character}</p>
    </>
  );
}
