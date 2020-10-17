import React, { useEffect, useState } from "react";
import "./App.css";

import Movie from "./components/Movie";

import Header from "./components/Header";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5d668a4e55e28292714d6fdd2fd67935&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=5d668a4e55e28292714d6fdd2fd67935&query=";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="tiles">
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
      </div>
      
    </div>
  );
}

export default App;
