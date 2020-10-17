import React from 'react';



function Movie({ title, poster_path, overview, vote_average }) {
    const IMG_API = "https://image.tmdb.org/t/p/w1280";

    return (
        <div className="movie">
            <img src={IMG_API + poster_path} alt={title} /> 
            <div className="movie-info" >
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>

            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie
