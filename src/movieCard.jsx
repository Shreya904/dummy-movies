import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.year}</p>
      </div>
      <div>
        <img
          src={movie.image || "https://via.placeholder.com/400"}
          alt={movie.movie}
        />
      </div>
      <div>
        <span>Rating: {movie.rating}</span>
        <h3>{movie.movie}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
