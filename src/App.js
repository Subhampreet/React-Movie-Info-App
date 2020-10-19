import React, { useEffect, useState } from "react";
import "./App.css";

import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5d668a4e55e28292714d6fdd2fd67935&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=5d668a4e55e28292714d6fdd2fd67935&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);


  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm){

      fetch(SEARCH_API + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });

      setSearchTerm("");

    }

    
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };


  

  return (
    <div className="App">
      <div className="header">
        <div className="header-left">
          <img src="/logo.png" className="logo" />
          <h1>
            React <span>Movie</span>{" "}
          </h1>
        </div>

        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Search a Movie..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </div>
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
