import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FilmListStyled, FilmListItem, FilmLink } from './FilmList.styled';

export default function FilmList({ movies }) {
  const location = useLocation();
  const stateData = {
    backLocation: location,
  };

  return (
    <FilmListStyled>
      {movies.map(movie => (
        <FilmListItem key={movie.id}>
          <FilmLink to={`/movies/${movie.id}`} state={stateData}>
            {movie.name}
          </FilmLink>
        </FilmListItem>
      ))}
    </FilmListStyled>
  );
}

FilmList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};