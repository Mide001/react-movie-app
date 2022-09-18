import React, { useEffect, useState } from 'react';
import SiteHeading from './components/SiteHeading';
import SearchBox from './components/SearchBox';
import MovieList from './components/MovieList';
import Favourite from './components/Favourite';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('');
  const [favourites, setFavourites] = useState([]);


  const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};

  const getDataRequest = async (value) => {
    const api = `https://www.omdbapi.com/?s=${value}&apikey=3c68c94a`;
    const response = await fetch(api);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }

  useEffect(() => {
    getDataRequest(value);
  }, [value])
  

  return (
    <div className='container-fluid main-container'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <SiteHeading header="ReactMovie" />
        <SearchBox value={value} setValue={setValue} />
      </div>
      <div className='row'>
        <MovieList movies={movies} favouriteComponent={Favourite} handleFavouritesClick={addFavouriteMovie} />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<SiteHeading header='Favourites' />
			</div>
			<div className='row'>
				<MovieList movies={favourites} favouriteComponent={favourites} />
			</div>
    </div>
    
  );
}

export default App;
