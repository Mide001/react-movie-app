import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const MovieList = (props) => {

    
    return (
        <>
        {props.movies.map((movie, index) => (
            <div className='card col-md-2 m-3'>
            <img src={movie.Poster} key={index} alt='movie'></img>
            <p className='text-center'>Year: {movie.Year}</p>
            <div className='text-center fontawesome-star' 
            style={{color: 'blue'}} onClick={() => 
            props.handleFavouritesClick(movie)}>
                Add To Favourite <FontAwesomeIcon icon={faStar} />
            </div>
            </div>
            
        ))}
        </>
    );
}

export default MovieList;