import { useState, useEffect } from 'react';
import Search from 'components/Search';
import * as API from '../service/api';
import Film from 'components/Film';
import { useSearchParams } from 'react-router-dom';


export default function Movies() {
  let [searchParams] = useSearchParams({});
  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    if (query.length === 0) {

        toast.info('Nothing found 🙄', {
          autoClose: 2000,
        });
        navigate('/movies');
        return;
    }
    API.getMovieByQuery(query).then(({ results }) => {
      const moviesArr = results.map(
        ({ id, original_title, poster_path, backdrop_path, vote_average }) => ({
          id,
          title: original_title,
          img: poster_path ?? backdrop_path,
          vote_average,
        })
      );
      setMovies(moviesArr);
    });
  }, [query]);
  return (
    <>
      <Search />
      {movies && <Film movies={movies} />}
    </>
  );
}