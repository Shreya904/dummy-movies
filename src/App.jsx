import React, { useState, useEffect } from "react";
import MovieCard from "./movieCard.jsx";
import "./App.css";

const API_URL = "/movies.json";

// NOTE:
// The assignment specified using https://dummyapi.online/api/movies
// However, the API was down or unreachable at the time of development.
// So I used a local JSON file (public/movies.json) to simulate the API and demonstrate the functionality as intended.
// change the API_URL to the actual endpoint when available.

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      const filtered = title
        ? data.filter((movie) =>
            movie.movie.toLowerCase().includes(title.toLowerCase())
          )
        : data;

      setMovies(filtered);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="app">
      <h1>MovieNest</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <a
              href={movie.url}
              target="_blank"
              rel="noopener noreferrer"
              key={movie.id}
            >
              <MovieCard movie={movie} />
            </a>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
