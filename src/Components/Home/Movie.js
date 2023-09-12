import React, { useState, useEffect } from "react";
import MovieCard from "./Moviecard";
import chevron from "../../Assets/Chevron right.png";

function Movie() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const apiKey = "863c80c01bce5ed6be5575e81819d634";

    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTopRatedMovies(data.results.slice(0, 10));
      })
      .catch((error) => {
        console.error("Error fetching top-rated movies:", error);
      });
  }, []);

  return (
    <div className="Movie container py-5 mx-auto">
      <div className="flex justify-between py-10">
        <h1 className="font-bold text-2xl tracking-wide ">Featured Movie</h1>
        <div className="flex items-center">
          <p className="text-red-700 px-2 cursor-pointer font-medium">
            See more
          </p>
          <img src={chevron} alt="chevron-right" className="h-4 w-4" />
        </div>
      </div>
      <div className="movie-list grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-12">
        {topRatedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movie;
