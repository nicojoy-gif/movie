import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import MovieDetails from '../MovieDetails'
import Movie from '../Movie'

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