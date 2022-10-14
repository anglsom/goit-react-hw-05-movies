import UseFetchCast from 'hook/UseFetchCast';
import Actors from 'components/Actors';

export default function Cast() {
  const cast = UseFetchCast();

  return (
    <>
      {cast ? <Actors cast={cast} /> : <p>There is no cast to this movie</p>}
    </>
  );
}