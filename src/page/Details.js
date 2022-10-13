import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import * as API from '../service/api';
import Card from 'components/Card';
import MyInfo from 'components/MyInfo';
import Button from 'components/Button';
import Notiflix from 'notiflix';

export default function Details() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLocation = location?.state?.backLocation;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.getMovieDetails(movieId)
      .then(response => {
        const {
          poster_path,
          title,
          name,
          vote_average,
          overview,
          genres,
          backdrop_path,
          release_date,
        } = response;

        const movieDetails = {
          img: poster_path ?? backdrop_path,
          title: title ?? name,
          vote_average,
          overview,
          genres,
          release_date,
        };

        setMovie(movieDetails);
      })
      .catch(error => {
        Notiflix.Notify.warning('Sorry, there are no details about this film');
      });
  }, [movieId]);

  return (
    <>
      {movie ? (
        <>
          <Button backLocation={backLocation} />

          <div>
            <Card data={movie} />
            <MyInfo backLocation={backLocation} />
          </div>

          <Outlet />
        </>
      ) : (
        <Button backLocation={backLocation} />
      )}
    </>
  );
}