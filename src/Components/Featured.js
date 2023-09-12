import React from 'react';
import a from '../Assets/Poster.png';
import a1 from '../Assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png';
import a2 from '../Assets/PngItem_1381056 1.png';
import MovieDetails from './MovieDetails';

function Featured() {
  const movies = [
    {
      image: a,
      place: 'USA, 2016 - Current',
      name: 'Stranger Things',
      icon: a1,
      rating: '86.0 / 100',
      apple: a2,
      applerating: '97%',
      genre: 'Action, Adventure, Horror',
    },
    {
        image: a,
        place: 'USA, 2005',
        name: 'Batman Begins',
        icon: a1,
        rating: '82.0 / 100',
        apple: a2,
        applerating: '70%',
        genre: 'Action, Adventure',
      },
      {
        image: a,
        place: 'USA, 2018',
        name: 'Spider-Man: Into The Spider Verse',
        icon: a1,
        rating: '84.0 / 100',
        apple: a2,
        applerating: '87%',
        genre: 'Animation, Action, Adventure',
      },
      {
        image: a,
        place: 'USA, 2017',
        name: 'DunKirk',
        icon: a1,
        rating: '78.0 / 100',
        apple: a2,
        applerating: '94%',
        genre: 'Action, Drama, History',
      },
      {
        image: a,
        place: 'USA, 2021',
        name: 'Dune',
        icon: a1,
        rating: '84.0 / 100',
        apple: a2,
        applerating: '75%',
        genre: 'Action, Adventure, Drama',
      },
      {
          image: a,
          place: 'USA, 2021',
          name: 'No Time To Die',
          icon: a1,
          rating: '76.0 / 100',
          apple: a2,
          applerating: '68%',
          genre: 'Action, Adventure, Thriller',
        },
        {
          image: a,
          place: 'USA, 2021',
          name: 'Shang-Chi ',
          icon: a1,
          rating: '84.0 / 100',
          apple: a2,
          applerating: '87%',
          genre: 'Animation, Action, Adventure',
        },
        {
          image: a,
          place: 'USA, 2017',
          name: 'DunKirk',
          icon: a1,
          rating: '78.0 / 100',
          apple: a2,
          applerating: '94%',
          genre: 'Action, Drama, History',
        },
    // Add more movie objects here as needed
  ];

  return (
    <div className='container mx-auto'>
      <div className='flex justify-between py-5'>
        <h1 className='font-bold text-2xl tracking-wide '>Featured Movie</h1>
        <p className='text-red-500'>See more</p>
      </div>
      <section className='grid text-start grid-cols-4 mx-auto gap-24'>
        {movies.map((movie, index) => (
          <div key={index}>
            <div>
              <img src={movie.image} alt={`Movie Poster ${index}`} className='h-64' />
              <p className='py-2 text-sm font-medium text-gray-400'>{movie.place}</p>
              <h2 className='font-bold text-lg'>{movie.name}</h2>
              <div className='flex py-2 font-medium'>
                <div className='flex pr-5 text-gray-400'>
                  <img src={movie.icon} alt='IMDb' className='' />
                  <p className='px-2'>{movie.rating}</p>
                </div>
                <div className='flex px-5 text-gray-400 content-center items-center'>
                  <img src={movie.apple} alt='Apple Rating' className='w-4 h-4' />
                  <p className='px-2'>{movie.applerating}</p>
                </div>
              </div>
              <p className='text-gray-400 font-medium'>{movie.genre}</p>
            </div>
          </div>
        ))}
      </section>
     
    </div>
  );
}

export default Featured;
