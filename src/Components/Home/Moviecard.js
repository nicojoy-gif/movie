import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  console.log(movie.id);
  return (
    <div
      data-testid="movie-card"
      className="movie-card bg-white  rounded-lg shadow-lg overflow-hidden"
    >
      <Link to={`/movie/${movie.id}`} className="btn-details">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          data-testid="movie-poster"
          className="movie-poster w-full h-64"
        />
        <div className="movie-details p-4">
          <h2
            data-testid="movie-title"
            className="movie-title text-xl font-semibold"
          >
            {movie.title}
          </h2>
          <p
            data-testid="movie-release-date"
            className="movie-release-date text-gray-500"
          >
            Release Date: {movie.release_date}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
