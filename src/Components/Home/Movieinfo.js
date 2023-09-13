import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import a from "../../Assets/Home.png";
import a1 from "../../Assets/Movie Projector.png";
import a2 from "../../Assets/TV Show.png";
import a4 from "../../Assets/Calendar.png";
import a3 from "../../Assets/tv.png";
import a5 from "../../Assets/Logout.png";
import b1 from "../../Assets/Plays.png";
import c from "../../Assets/Star.png";
import c1 from "../../Assets/Group 50.png";
import c2 from "../../Assets/Group 52.png";
const MovieInfo = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=863c80c01bce5ed6be5575e81819d634`
        );
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
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
    <div className=" ">
      <section className="flex flex-col lg:flex-row">
        <div className="lg:w-1/6 w-full border rounded-r-3xl  border-gray-400 flex flex-col ">
          <div className="mt-5">
            <div className="flex space-x-4  content-center justify-center items-center">
              <img src={a3} alt="logo" className="h-10 w-10" />
              <h1 className="text-xl font-bold">MovieBox</h1>
            </div>
            <div className="flex flex-col justify-center  mx-auto">
              <ul className="my-5">
                <li className="hover:bg-red-100 px-7 relative hover:border-r-4 cursor-pointer border-red-400 w-full py-5">
                  <Link to="/">
                    <div className="flex items-center content-center">
                      <img src={a} className="h-6 w-6 mx-5" />
                      <p className="text-gray-500 font-bold">Home</p>
                    </div>
                  </Link>
                </li>
                <li className="hover:bg-red-100 px-7 hover:border-r-4 border-red-400 cursor-pointer w-full py-5">
                  <div className="flex items-center content-center">
                    <img src={a1} className="h-6 w-6 mx-5" />
                    <p className="text-gray-500 font-bold">Movies</p>
                  </div>
                </li>
                <li className="hover:bg-red-100 px-7 hover:border-r-4 cursor-pointer border-red-400 w-full py-5">
                  <div className="flex items-center content-center">
                    <img src={a2} className="h-6 w-6 mx-5" />
                    <p className="text-gray-500 font-bold">TV Series</p>
                  </div>
                </li>
                <li className="hover:bg-red-100 px-7 hover:border-r-4 cursor-pointer border-red-400 w-full py-5">
                  <div className="flex items-center content-center">
                    <img src={a4} className="h-6 w-6 mx-5" />
                    <p className="text-gray-500 hover:text-red font-bold">
                      Upcoming
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="border-2 mx-5  border-red-300 bg-red-100 rounded-xl">
                <div className="p-4 text-start">
                  <h3 className="font-medium  text-gray-500 py-1">
                    Play movie quizes and earn free <br />
                    tickets
                  </h3>
                  <p className="py-1 text-sm font-medium text-gray-400">
                    50K people are playing now
                  </p>
                  <div className="flex ">
                    <button className="bg-red-200 text-red-500 font-medium mx-auto rounded-full px-5 py-1">
                      Start playing
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center cursor-pointer text-lg flex justify-center items-center text-gray-600 py-6 font-semibold">
              <img src={a5} alt="logout" />
              <p>Log out</p>
            </div>
          </div>
        </div>
        <div className="lg:w-5/6 w-full">
          <div className="flex flex-col m-5">
            <div className="h-1/3 w-full relative">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                alt={movieDetails.title}
                className="h-80 w-full rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="rounded-full bg-white bg-opacity-50 h-24 w-24 flex items-center justify-center">
                  <img src={b1} alt="play-logo" className="w-16 h-16" />
                </div>
                <p className="text-white text-lg font-medium mt-2">
                  Watch Trailer
                </p>
              </div>
            </div>

            <div className="h-1/2 my-4">
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="flex">
                  <h2
                    data-testid="movie-title"
                    className="text-gray-500 font-medium"
                  >
                    {movieDetails.title} .{" "}
                    <span data-testid="movie-release-date">
                      {" "}
                      {movieDetails.release_date}{" "}
                    </span>
                    . PG-13 .{" "}
                    <span data-testid="movie-runtime">
                      {movieDetails.runtime}mins
                    </span>
                  </h2>

                  <button className="rounded-full bg-red-50 text-red-400 font-medium mx-2 px-3 border border-gray-300">
                    Action
                  </button>

                  <button className="rounded-full bg-red-50 text-red-400 font-medium mx-2 px-3 border border-gray-300">
                    Drama
                  </button>
                </div>
                <div className="flex">
                  <img src={c} alt="favorite" />
                  <p className="text-gray-200 text-xl font-medium ml-2">
                    {movieDetails.vote_average}
                    <span className="text-gray-500 text-base">
                      {" "}
                      | {movieDetails.vote_count}k
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col  lg:flex-row my-2">
                <div className="lg:w-4/6 w-full text-gray-800 text-lg font-medium  text-start">
                  <p className="py-2" data-testid="movie-overview">
                    {movieDetails.overview}
                  </p>
                  <div className="py-2">
                    <p className="py-2">
                      Director :{" "}
                      <span className="text-red-400">Joseph Kosinski</span>
                    </p>

                    <p className="py-2">
                      Writers :{" "}
                      <span className="text-red-400">Jim Cash, Jack Epps</span>
                    </p>
                    <p className="py-2">
                      Stars :{" "}
                      <span className="text-red-400">
                        Tom Cruise, Jennifer Connelly
                      </span>
                    </p>
                  </div>
                </div>
                <div className="lg:w-2/6 w-full">
                  <div className="mb-2">
                    <img src={c1} alt="see showtimes" className="h-12 w-full" />
                  </div>
                  <div className="mb-2">
                    <img src={c1} alt="Watch more" className="h-12 w-full" />
                  </div>
                  <div className="mb-2">
                    <img src={c2} alt="best movies" className="w-full h-40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieInfo;
