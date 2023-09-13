import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import MovieInfo from "../Home/Movieinfo";

function Index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
      </Routes>
    </>
  );
}

export default Index;
