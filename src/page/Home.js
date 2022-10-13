import { useState, useEffect } from 'react';
import FilmList from 'components/FilmList/FilmList';
import * as API from '../service/api';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.getTrending().then(({ results }) => {
      const arrayOfMovies = results.map(({ name, title, id }) => ({
        name: name ?? title,
        id,
      }));
      setMovies(arrayOfMovies);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && <FilmList movies={movies} />}
    </>
  );
}