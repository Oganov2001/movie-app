import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetails from './components/MovieDetails';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={ <HomePage /> } />
      <Route path="/movie/:id" element={ <MovieDetails /> } />
    </Routes>
  </Router>
);

export default App;
