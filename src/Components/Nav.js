import React, { useState } from 'react';
import a from '../Assets/Menu.png';
import a3 from '../Assets/tv.png';
import { NavLink } from 'react-router-dom';

function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null); 
  const [searched, setSearched] = useState(false);
  const resultsPerPage = 8;

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    setLoading(true);
    setError(null); 

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=863c80c01bce5ed6be5575e81819d634&query=${searchQuery}`
      );
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.results);
        setCurrentPage(1); 
      } else {
       
        const errorMessage = await response.text();
        setError(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError('An error occurred while fetching search results.');
    } finally {
      setLoading(false);
      setSearched(true);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setError(null); 
    setSearched(false);
  };

  
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;

  
  const currentResults = searchResults.slice(startIndex, endIndex);

  return (
    <div>
 <nav className="relative px-4 py-5 container mx-auto flex justify-between items-center">
        <div>
          <NavLink to="/" className="text-3xl font-bold leading-none" href="#">
            <div className="flex space-x-4 content-center justify-center items-center">
              <img src={a3} alt="logo" className="h-10 w-10" />
              <h1 className="text-xl text-white">MovieBox</h1>
            </div>
          </NavLink>
        </div>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMobileMenu}
          >
            <img src={a} alt="menu" className="h-10 w-10" />
          </button>
        </div>
        <ul
          className={`lg:flex w-full lg:w-4/6 justify-between space-x-10 ${
            isMobileMenuOpen ? '' : 'hidden'
          }`}
        >
          <div className="relative text-gray-600 hidden lg:block">
            <form onSubmit={handleSearch}>
              <input
                type="search"
                name="search"
                placeholder="What do you want to watch?"
                value={searchQuery}
                onChange={handleSearchQueryChange}
                className="h-10 px-5 text-white placeholder-text-white cursor-pointer pr-10 bg-inherit border border-white rounded-lg w-96 text-sm focus:outline-none"
              />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="lg:inline-block hidden">
            <NavLink
              to="/"
              className="text-xl font-bold leading-none"
              href="#"
            >
              <div className="flex space-x-4 content-center justify-center items-center">
                <h1 className="font-bold text-xl text-white">Sign in</h1>
                <img src={a} alt="signin logo" className="h-10 w-10" />
              </div>
            </NavLink>
          </div>
        </ul>
      </nav>
      {loading ? (
        <div className="flex justify-center items-center h-64">
           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="container mx-auto hidden lg:block">
          {error ? (
            <div className="text-red-500 font-bold text-center mt-4">{error}</div>
          ) : (
            <>
              {searched && searchResults.length === 0 ? (
                 <div className="text-center mt-4 text-red-500 text-3xl font-bold">No results found</div>
              ) : (
                <>
                  <div className="flex justify-between mb-4">
                   
                    {(searchResults.length > 0 || error) && ( 
    <button
      onClick={handleClearSearch}
      className="px-2 py-1 bg-red-500 text-white rounded-lg"
    >
      Clear
    </button>
  )}
                  </div>
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                    {currentResults.map((movie) => (
                      <div key={movie.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt={movie.title}
                          className="h-24 w-full object-cover"
                        />
                        <div className="p-4">
                          <h2 className="text-2xl font-semibold">{movie.title}</h2>
                          <p className="text-gray-500">
                            Release Date: {movie.release_date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {searchResults.length > resultsPerPage && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNextPage}
                    disabled={endIndex >= searchResults.length}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
      <div
        className={`navbar-menu relative z-50 ${
          isMobileMenuOpen ? '' : 'hidden'
        }`}
      >
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className={`fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-blue-400 border-r overflow-y-auto ${isMobileMenuOpen ? '' : 'hidden'}`}>
  <div className="flex items-center justify-between mb-8">
    <NavLink to="/" className="text-3xl font-bold leading-none" href="#">
      <div className="flex space-x-4 content-center justify-center items-center">
        <img src={a3} alt="logo" className="h-10 w-10" />
        <h1 className="text-xl text-white">MovieBox</h1>
      </div>
    </NavLink>

    <button className="navbar-close">
      <svg
        className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={toggleMobileMenu}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
  <div>
    <div className="relative text-gray-600">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          name="search"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          placeholder="What do you want to watch?"
          className="h-10 px-5 text-white placeholder:text-white pr-10 bg-inherit cursor-pointer border border-white rounded-lg w-80 text-sm focus:outline-none"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  </div>
  
  {loading ? (
    <div className="animate-spin rounded-full my-5 mx-auto text-center h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  ) : (
    <div className="grid  grid-cols-1 gap-4 mt-4">
      {searched  && searchResults.length === 0 ? (
        <div className="text-center mt-4 text-red-500 text-3xl font-bold">No results found</div>
      ) : (
        searchResults.map((movie) => (
          <div key={movie.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="h-24 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{movie.title}</h2>
              <p className="text-gray-500">
                Release Date: {movie.release_date}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  )}
  <div className="mt-auto block lg:hidden">
    <div className="pt-6">
      <NavLink
        to="/"
        className="text-xl font-bold leading-none"
        href="#"
      >
        <div className="flex space-x-4 content-center justify-center items-center">
          <h1 className="font-bold text-xl text-white">Sign in</h1>
        </div>
      </NavLink>
    </div>
    {error && (
      <div className="text-red-500 font-bold text-center mt-4">{error}</div>
    )}
    {(searchResults.length > 0 || error) && ( // Render the Clear button when there are search results or an error
      <button
        onClick={handleClearSearch}
        className="px-2 py-1 bg-red-500 text-white rounded-lg mt-4"
      >
        Clear
      </button>
    )}
  </div>
</nav>

        </div>
        
    </div>
    
  );
}

export default Nav;
