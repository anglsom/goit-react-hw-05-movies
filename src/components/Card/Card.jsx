import PropTypes from 'prop-types';
import noPoster from '../../images/imdbnoimage.jpeg';

import {
  MovieInfo,
  MovieImage,
  MovieDetails,
  MovieInfoName,
} from './Card.styled';

export default function Card({ data }) {
  const { img, title, vote_average, overview, genres, release_date } = data;

  return (
    <MovieDetails>
      <MovieImage
        src={img ? `https://image.tmdb.org/t/p/w500/${img}` : noPoster}
        alt={title}
      />
      <MovieInfo>
        <MovieInfoName>Vote average:</MovieInfoName>
        <p>{vote_average}</p>
        <MovieInfoName>Overview:</MovieInfoName>
        <p>{overview}</p>
        <MovieInfoName>Genres:</MovieInfoName>
        <p>{genres.map(el => el.name).join(', ')}</p>
        <MovieInfoName>Release date:</MovieInfoName>
        <p>{release_date}</p>
      </MovieInfo>
    </MovieDetails>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object.isRequired),
  }),
};