import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail } from '../services/api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetail(id).then((response) => {
      setMovie(response.data);
    });
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <img src={
        movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                          : "./src/assets/unavailable.png"
        } alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.release_date}</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
