import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=863c80c01bce5ed6be5575e81819d634`
        );
        if (response.ok) {
          const data = await response.json();
          setMovieDetails(data);
        } else {
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return (
      <div className="animate-spin rounded-full my-5 mx-auto text-center h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <section className="lg:w-1/2 w-full mx-auto">
        <div className="bg-white shadow-lg rounded-lg h-screen overflow-hidden flex flex-col justify-center items-center">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="h-96"
          />
          <div className="px-6 py-4 text-center">
            <h2 data-testid="movie-title" className="text-2xl font-semibold">
              {movieDetails.title}
            </h2>
            <p data-testid="movie-release-date" className="text-gray-500">
              Release Date (UTC): {movieDetails.release_date}
            </p>
            <p data-testid="movie-runtime" className="text-gray-500">
              Runtime: {movieDetails.runtime} minutes
            </p>
            <p data-testid="movie-overview" className="text-gray-700 mt-4">
              {movieDetails.overview}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
