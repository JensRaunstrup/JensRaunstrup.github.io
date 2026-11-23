import { useState, useEffect } from "react";

import "./Movie-title.css"

function MovieTitle() {
        console.log("MovieTitleRan");
        const [movieTitle, setMovieTitle] = useState("Im a title");
        
    return(
        <>
            <h1 className="movieTitle">{movieTitle}</h1>
        </>
    );
}

export default MovieTitle;