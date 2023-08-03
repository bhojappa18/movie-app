import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	const posterBaseUrl = "https://image.tmdb.org/t/p/";
    const posterSize = "w185"; 
    //const fullPosterUrl = posterBaseUrl + posterSize + posterPath;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={posterBaseUrl + posterSize + movie.poster_path} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
	
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
