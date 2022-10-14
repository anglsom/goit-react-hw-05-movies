import UseFetchReviews from 'hook/UseFetchReviews';
import Comment from 'components/Comment';

export default function Reviews() {
  const reviews = UseFetchReviews();

  return (
    <>
      {reviews.length === 0 ? (
        <p>We don`t have any reviews for this movie</p>
      ) : (
        <Comment reviews={reviews} />
      )}
    </>
  );
}