import { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { fetchMovies } from '../services/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = (query) => {
    fetchMovies(query).then((response) => {
      setMovies(response.data.results || []);
    });
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
