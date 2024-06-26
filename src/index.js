import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import MovieList from './components/movieList/movieList';
import Movie from './components/movieDetail/movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
    <Header/>
 <Routes>
  <Route index element={<Home/>}></Route>
  <Route path="/movie/:id" element={<Movie/>}></Route>
  <Route path="/movies/:type" element={<MovieList/>}></Route>
  <Route path="/*" element={<h1>Error Page</h1>}></Route>
 </Routes>
 </Router>
);

