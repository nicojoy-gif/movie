import React from "react";
import Nav from "../Nav/Nav";
import { NavLink } from "react-router-dom";
import a from "../Assets/Poster.png";
import a1 from "../Assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import a2 from "../Assets/PngItem_1381056 1.png";
import a3 from "../Assets/Play.png";
import Movie from "./Movie";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <section>
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${a})` }}
        >
          <Nav />
          <div className="text-white grid  content-center h-5/6 text-start container m-auto px-5">
            <div className="font-bold text-4xl py-3 leading-10 tracking-wide">
              <h1>John Wick 3 :</h1>
              <p>Parabellum</p>
            </div>
            <div className="flex ">
              <div className="flex pr-5 text-gray-400">
                <img src={a1} alt="imdb" className="" />
                <p className="px-2  ">860 / 100</p>
              </div>
              <div className="flex px-5 text-gray-400 content-center items-center">
                <img src={a2} alt="imdb" className="w-4 h-4" />
                <p className="px-2">97%</p>
              </div>
            </div>
            <div>
              <p className="text-white lg:w-2/6 py-4 text-start">
                John Wick is on the run after killing a member of the
                international assassin's guild, and with a $14 million price tag
                on his head, he is the target of hit men and women everywhere.
              </p>
              <div>
                <button className="bg-red-600 text-center item-center justify-center flex text-white   p-2 rounded-md font-medium">
                  <img src={a3} alt="watch trailer btn" className="mr-2" />
                  <p className="text-sm">WATCH TRAILER</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Movie />
      <Footer />
    </div>
  );
}

export default Home;
