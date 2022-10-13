import PropTypes from 'prop-types';
import notImage from '../../images/no-image-available.png';
import {
  CastingList,
  CastItem,
  ImageContainer,
  ActorImage,
  ActorsInfo,
  ActorsInfoName,
} from './Actors.styled';

export default function Actors({ cast }) {
  return (
    <CastingList>
      {cast.map(({ id, character, name, profile_path }) => (
        <CastItem key={id}>
          <ImageContainer>
            <ActorImage
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : notImage
              }
              alt={character}
            />
          </ImageContainer>
          <ActorsInfo>
            <ActorsInfoName>Actors name:</ActorsInfoName>
            <p>{name}</p>
            <ActorsInfoName>Character: </ActorsInfoName>
            <p>{character}</p>
          </ActorsInfo>
        </CastItem>
      ))}
    </CastingList>
  );
}

Actors.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};