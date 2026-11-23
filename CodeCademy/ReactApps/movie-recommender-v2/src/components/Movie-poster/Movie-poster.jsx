import { useState, useEffect } from "react";

import "./Movie-poster.css"

import shaqFuImage from "../../assets/shaqFu.jpg"


function MoviePoster() {
    console.log("MoviePoster Ran")
    const [moviePosterPath, setMoviePosterPath] = useState(shaqFuImage)
    return(
        <>
            <div className="moviePosterContainer">
                <img src={moviePosterPath} alt="shaq" className="moviePoster"/>
            </div>
        </>
    );
}

export default MoviePoster;