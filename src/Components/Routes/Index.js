import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import MovieDetails from '../Home/MovieDetails'
import Movie from '../Home/Movie'

function Index() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<Movie/>} />
        <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
    </>
  )
}

export default Index