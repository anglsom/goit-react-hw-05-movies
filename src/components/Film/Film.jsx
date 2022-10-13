import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import placeholder from '../../images/imdbnoimage.jpeg';
import {
  QueryList,
  QueryListItem,
  QueryImage,
  MovieLink,
  MovieInfo,
} from './Film.styled';

export default function Film({ movies }) {
  const location = useLocation();

  const stateData = {
    backLocation: location,
  };

  return (
    <QueryList>
      {movies.map(({ id, title, img, vote_average }) => {
        return (
          <QueryListItem key={id}>
            <MovieLink to={`/movies/${id}`} state={stateData}>
              <QueryImage
                src={
                  img ? `https://image.tmdb.org/t/p/w500/${img}` : placeholder
                }
                alt={title}
              />
              <MovieInfo>
                <h3>{title}</h3>
                <p>Vote average: {vote_average}</p>
              </MovieInfo>
            </MovieLink>
          </QueryListItem>
        );
      })}
    </QueryList>
  );
}

Film.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string,
      vote_average: PropTypes.number,
    })
  ),
};