export default function Review({ review: { author, content } }) {
  return (
    <>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </>
  );
}
