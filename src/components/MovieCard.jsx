import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
    <h2>{movie.title}</h2>
    <p>{movie.release_date}</p>
    <Link to={`/movie/${movie.id}`}>More Info</Link>
  </div>
);

export default MovieCard;
