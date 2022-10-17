import PropTypes from 'prop-types';
import { Navigation } from './MyInfo.styled';

export default function MyInfo({ backLocation }) {
  return (
    <>
      <hr />
      <h4>Additional information</h4>
      <Navigation to={'cast'} state={{ backLocation }}>
        Cast
          </Navigation>
      <Navigation to={'reviews'} state={{ backLocation }}>
        Reviews
      </Navigation>
    </>
  );
}

MyInfo.propTypes = {
  backLocation: PropTypes.object.isRequired,
};