import PropTypes from 'prop-types';
import { CommentList, Author } from './Comment.styled';

export default function Comment({ reviews }) {
  return (
    <CommentList>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <Author>Author: </Author>
          <span>{author}</span>
          <p>{content}</p>
        </li>
      ))}
    </CommentList>
  );
}

Comment.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};