import {useState, useEffect } from "react"
import "./Search-for-movies.css"

function SearchForMovies() {
    /*
    const apiStandardAdress= "https://api.themoviedb.org/3"
    const apiGenreList= "/genre/movie/list"
    const apiFind30MoviesEndpoint = "/discover/movie"
*/

    //laver en tom array der skal holde genrer fra api kaldet.
    const [genres, setGenres] = useState([]);

    function getGenres() {
        const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json', 
                Authorization: `Bearer ${tmdbKey}`
            }
        };

        fetch(url, options)
            .then(res => res.json())
                .then(json => {
                    console.log(json)
                    setGenres(res)
                })
                .catch(err => console.error(err));
            return(
                console.log("genGenres ran")
            );
    };

    function showGenres(Genres) {
            Genres.map((genre)=> {
                <option value={genre}>{genre}</option>
            })
    };
    

    console.log("apifunction ran")

    return(
        <>    
            <div className="movieDropdownDiv">
                <p>Select a random movie by genre</p>
                <select name="" id="" className="movieDropdown">
                    {showGenres}
                    {/* 
                    <option value="action">Action</option>
                    <option value="comedy">Adventure</option>
                    <option value="thriller">Comedy</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="comedy">Thriller</option>    
                    */}
                </select>
            </div>
            <div className="searchButtonDiv">
                <button className="button">Search</button>
            </div>
        </>
    );
}

export default SearchForMovies;