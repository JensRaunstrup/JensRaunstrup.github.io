//header element fra originale html fil.
/*
  <head>
    <meta charset="utf-8">
    <title>Film Finder</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400&family=Fredoka+One&family=Questrial&family=Staatliches&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="public/style.css">
    <script defer src="https://kit.fontawesome.com/e918d10e90.js" crossorigin="anonymous"></script>
    <script defer src="public/helpers.js"></script>
    <script defer src="public/script.js"></script>
  </head>
*/

/*line 1: importer usestate fra react. line 2,3 og 4 er at importere billeder fra en anden mappe. 
"import "../../scripts/helpers.js"": vi importerer bare helper funktionerne.
"import '../App/App.css'": vi importerer bare css.
*/
import { useState, useEffect } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import heroImg from '../../assets/hero.png'

import "../../scripts/helpers.js"

import '../App/App.css'


/*vi definerer en app funktion som hele denne fil er bygget op omkring.*/
function App() {
  const [count, setCount] = useState(0)



  //helperFunctionsObject: et object vi laver der skal idneholde alle hjælper funktionerne
  //genres: vi laver genres og setGenres som variabler. vi siger deres værdi skal starte som en tom array. senere gemmes films genres her.
  let helperFunctionsObject = {};

  const [genres, setGenres] = useState([])

  
  //populateGenreDropdown: a function we make that shows the genres a user can search from.
  //genres: an array of genres is expected
  //genre: each space in the genres array is a genre object.

  //genres.map: we then map the genres array and assign each space to the variable genre.
  //<option: for each genre we render that genre as an option
  //key={genre.id}: we assign the key to the id of the genre variable.
  //value={genre.id}: we assigne the value of the option html element to the value of the genre.id.
  //{genre.name}: we assign the inner html of the option code to the name of the genre variable object.
  function populateGenreDropdown(genres) {
        return (genres.map((genre) => {
          return (<option key={genre.id} value={genre.id}>{genre.name}</option>);
        }
      )
    )
  };

  //selectedGenre: we make a variable called selectedgenre and assign it a value of an empty string.
  //updateSelectedGenre: we define a function that should updatetheselectedgenre. it takes an event. then it updates the selected genre
  //with the value of the event target value.
  const [selectedGenre, setSelectedGenre] = useState("");
    function updateSelectedGenre(event) {
      setSelectedGenre(event.target.value);
    };

    //useEffect: we use useEffect to connect to an external system.
    //fetch: we fetch the tmdb movie database. we do that by following the apis syntax. where we start with "bearer" then we use 
    //  destruktering syntax and give it a parameter of options (which is not defined yet? or maybe it is in the api?)
    //.then((res) =>: if we get a result
    //res.json(): then we expect it to be a json object. json expects a json object which it then converts to javascript usable code.
    //  often because json files have the keys as strings which javascript cant run. so we need to convert it to just a key and not a string key.
    //console.log(res): then if we get a resulkt we log it to the console.
    //setGenres(res): we set the value of genres to the result of the API call.
    //.catch((error) =>: if the code does not run, we catch that error and log it to the console.
    useEffect(() => {
      fetch(`Bearer ${tmdbKey}`,options)
        .then((res) => {
          res.json();
        })
          .then((res) => {
            console.log(res)
            setGenres(res)
          })
            .catch((error) => {
              console.error(error)
            })
    }, ([]))







  

  /*
  // Populate dropdown menu with all the available genres
  const populateGenreDropdown = (genres) => {
      const select = document.getElementById('genres')

      for (const genre of genres) {
          let option = document.createElement("option");
          option.value = genre.id;
          option.text = genre.name;
          select.appendChild(option);
      }
  };
*/
  // Returns the current genre selection from the dropdown menu
  const getSelectedGenre = () => {
      const selectedGenre = document.getElementById('genres').value;
      return selectedGenre;
  };
  






  // showBtns: Displays the like and dislike buttons on the page
  // btnDiv: det div that contains the like and dislike buttons gets grabbeed and then its hidden attribute gets removed, so it gets shown.
  const showBtns = () => {
      const btnDiv = document.getElementById('likeOrDislikeBtns');
      btnDiv.removeAttribute('hidden');
  };

  // clearCurrentMovie: Clear the current movie from the screen
  //moviePosterDiv: contains the picture for the movie
  //movieTextDiv: contains the text for the movie.
  //moviePosterDiv.innerHTML: removes the picture for the movie and assigns to it an empty string istead so it dissapears.
  //movieTextDiv.innerHTML: remove the text for the movie and assigns to it an empty string.
  const clearCurrentMovie = () => {
      const moviePosterDiv = document.getElementById('moviePoster');
      const movieTextDiv = document.getElementById('movieText');
      moviePosterDiv.innerHTML = '';
      movieTextDiv.innerHTML = '';
  }


  // likeMovie: After liking a movie, clears the current movie from the screen and gets another random movie. identiccal to dislikeMovie but
  // with a different name to show distinction between the two. in the future liked movies can be used for something else like a reccomendation algoritm maybe?
  // clearCurrentMovie: removes a movies picture and text from the html field. defined earlier.
  //showRandomMovie: gets defined later in the code? note: why later and not now?
  const likeMovie = () => {
      clearCurrentMovie();
      showRandomMovie();
  };

  //dislikeMovie: After disliking a movie, clears the current movie from the screen and gets another random movie
  //clearCurrentMovie: defined above
  //showRandomMovie: defined above.
  const dislikeMovie = () => {
      clearCurrentMovie();
      showRandomMovie();
  };

  // createMoviePoster: Create HTML for movie poster
  //moviePosterUrl: grabs the movies picture from the tmdb database and saves it to posterpath.
  //posterImg: we then create a for now empty img html element, that later will store the movie picture.
  // posterImg.setAttribute('src', moviePosterUrl): we give the previous html element a src attribute and assign to it the url defined earlier (moviePosterUrl).
  // posterImg.setAttribute('id', 'moviePoster'): we give the posterimg html element an attribute of id called movieposter so we can find it later.
  //note: this works for now since we only display one movie at at time. if we displayed multiple movies we would probably need a for loop that increases
  // a counter variable. but for now since we reset the shown movie it is fine for now.
  //return posterImg: we then return the posters image. so we later can run posterImg as JSX as a component?
  const createMoviePoster = (posterPath) => {
      const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;
      const posterImg = document.createElement('img');
      posterImg.setAttribute('src', moviePosterUrl);
      posterImg.setAttribute('id', 'moviePoster');
      return posterImg;
  };

  //note: can be made into a react compoennt?
  // createMovieTitle: Create HTML for movie title. it takes a title as its variable. that it receieves from the api call?
  //titleHeader: we create an html element that is empty for now and we specifi we want it to be an h1 element.
  // titleHeader.setAttribute('id', 'movieTitle'): we then give that header a title of the "movieTitle" note: this works because we only show one movie at a time.
  // titleHeader.innerHTML = title: we assign the inner value to html.
  //return titleheader: we then return the header of this title so we can render it later to the app component or a different component.
  const createMovieTitle = (title) => {
      const titleHeader = document.createElement('h1');
      titleHeader.setAttribute('id', 'movieTitle');
      titleHeader.innerHTML = title;
      return titleHeader;
  };

  // createMovieOverview: Create HTML for movie overview, it takes an overview variable.
  // overview: the descripte text for a movie that the api call receives? probably defined as an object value somewhere? cant find its definition?
  //overviewParagraph: creates a temporary empty "p" html element.
  //verviewParagraph.setAttribute('id', 'movieOverview'): we give the p html element an attribute of id with a value of movieoverview
  //overviewParagraph.innerHTML = overview: we assign the rendered html to the brwoser, to the value of the overview from the api call. 
  const createMovieOverview = (overview) => {
      const overviewParagraph = document.createElement('p');
      overviewParagraph.setAttribute('id', 'movieOverview');
      overviewParagraph.innerHTML = overview;
    
      return overviewParagraph;
  };

  //getRandomMovie: Returns a random movie from the first page of movies. takes an input of movies
  //movies: an array of presumably objects from the tmdb api. 
  // note: not sure i understand
  
  //randomIndex: first we make a random number between 0 and 1 with digits. then we multiply that by the length of the number og movies we have found?
  //then we round that number down to the "floor" so we round it down to the next smaller whole number.
  //randomMovie: we make a variable and assign its value to a movie with an index of random movie. 
  //return: returns the random movie which is chosen randomly based on the length of the movies array. 
  // that we we cant pick a movie that does not excist outside the boundry of our array.
  const getRandomMovie = (movies) => {
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];
      return randomMovie;
  };



  // displayMovie: Uses the DOM to create HTML to display the movie.
  //movieInfo: is defined later in the code. not defined yet. Should contain information about each movie?
  //moviePosterDiv: we need to get each elementId for the movie, so the image (poster), text, and each like and dislike button. we cant display them
  //before we have their "location".
  //createMoviePoster: a function we defined earlier that creates a movie image (poster) 
  // which is made depending on the movies placement in our array? (poster_path)
  //titleheader: we create a title for our movie that we later can render to the browser. 
  // we take movieInfos title property and make a variable to store the value in. We get the movieInfo from our earlier defined createMovieTitle
  //createMovieTitle: makes an empty h1 that then gets the title value of a specific movie we grab.
  ////overviewText: we use our earlier defined createMovieOverview function. with that function we create a paragraf that contains the movie description
//appendChild: we use append child to insert our defined image, title and description to be at the end of each of their respective "containers".
//showBtns: we run the funciton to shiow our buttons that we defined earlier.
//

  const displayMovie = (movieInfo) => {
      const moviePosterDiv = document.getElementById('moviePoster');
      const movieTextDiv = document.getElementById('movieText');
      const likeBtn = document.getElementById('likeBtn');
      const dislikeBtn = document.getElementById('dislikeBtn');
    
      // Create HTML content containing movie info
      const moviePoster = createMoviePoster(movieInfo.poster_path);
      const titleHeader = createMovieTitle(movieInfo.title);
      const overviewText = createMovieOverview(movieInfo.overview);
    
      // Append title, poster, and overview to page
      moviePosterDiv.appendChild(moviePoster);
      movieTextDiv.appendChild(titleHeader);
      movieTextDiv.appendChild(overviewText);
    
      showBtns();
      likeBtn.onclick = likeMovie;
      dislikeBtn.onclick = dislikeMovie;
  };
  


  helperFunctionsObject = {
  //    populateGenreDropdown: populateGenreDropdown(genres),
      getSelectedGenreKey: getSelectedGenre,
      showBtnsKey: showBtns,
      clearCurrentMovieKey: clearCurrentMovie,
      likeMovieKey: likeMovie,
      dislikeMovieKey: dislikeMovie,
    
      createMoviePoster: createMoviePoster(posterPath),
      createMovieTitle: createMovieTitle(title),
      createMovieOverview: createMovieOverview(overview),
      getRandomMovie: getRandomMovie(movies),
      displayMovie: displayMovie(movieInfo)
      
  };





  
    
























  //scripts
  //1.

  //28. didnt add more.


  //2. i tvilv om denne api key burde være en anden.
  //tmdbBaseUrl: we save the baseurl to a variable
  //playBtn: we grab the playbutton from the html codes id for the button.
  const tmdbBaseUrl = 'https://api.themoviedb.org/3';
  const playBtn = document.getElementById('playBtn');

  //6.
  //getGenres: we make an asynchronys funciton that gets the genres.
  //genreRequestEndpoint: we expect it to get the movies from an endpoint called "/genre/movie/list".
  //requestParams: we want the request parameters to be a concacted destrucutred string with the value of our specific key saved in the .env file in our project.
  //saved locally so it cant be stolen.
  //urlToFetch: we then combine every variable we assigned seperatly and then combine them together as the url for the API to use. so we can get our desired data.
  /*
  try: we then try to run some code, where we fetch the url.
  response.ok === true: here we expect the response to be true.
  jsonResponse: if its true we await a response from the api. untill this function continues. then we log it to the console
  genres: we create a variable called genres and assign to it the value of the response object's genres property form the api's call.
  return genres: then we return genres.
  catch: if we dont get a response form the api then we log the error.
  */
  const getGenres = async () => {
    //3.
    const genreRequestEndpoint = "/genre/movie/list";
    //4.
    const requestParams = `?api_key=${tmdbKey}`;
    //5.
    const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`
    //7.
    try {
  //8.
      const response = await fetch(urlToFetch);
      if (response.ok === true) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        const genres = jsonResponse.genres;
        console.log(genres);
        return genres;
      }
      } catch (error) {
        console.log(error);
    }
  };


  /*
  getMovies: we define an assyncrhonous function that gets movies.
  selectedGenre, 
  */
  const getMovies = async () => {
    const selectedGenre = getSelectedGenre();
    const discoverMovieEndpoint = "/discover/movie";
    const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
    const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;
    try {
      const response = await fetch(urlToFetch)
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        const movies = jsonResponse.results;
        console.log(movies);
        return movies;
      }
    } catch (error) {
      console.log(error);
    }
  };
  //getMovies()

  const getMovieInfo = async (movie) => {
    const movieId = movie.id;
    const movieEndpoint = `/movie/${movieId}`;
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;
    try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const movieInfo = await response.json();
        return movieInfo;
      }
    } catch (error) {
      console.log(error);    
    }
  };

  // Gets a list of movies and ultimately displays the info of a random movie from the list
  const showRandomMovie = async () => {
    const movieInfo = document.getElementById('movieInfo');
    //if (movieInfo.childNodes.length > 0) {
      if (movieInfo && movieInfo.childNodes.length > 0) {
      clearCurrentMovie();
    }
    const movies = await getMovies();
    const randomMovie = getRandomMovie(movies);
    const info = await getMovieInfo(randomMovie);
    displayMovie(info);
  };

  getGenres().then(populateGenreDropdown);
  playBtn.onclick = showRandomMovie;

























    //console.log(helperFunctionsObject)
    return (
      <>
      <header>
        <h1 id="appTitle">🍿Film Finder🍿</h1>
      </header>
      <form id="genreForm">
        <label>Choose a genre:</label>
        {/*dropdown menu. value: den værdi den altid skal vise. vi sætter den til den valgte genre.*/}
        <select name="genres" id="genres" value={selectedGenre} onChange={updateSelectedGenre}>
          {populateGenreDropdown(genres)}
        </select>
      </form>
      <button id="playBtn">Let's Play!</button>
      <div id="movieInfo">
        <div id="moviePoster"></div>
        <div id="movieText"></div>
      </div>
      <div id="likeOrDislikeBtns" hidden>
        <button id="likeBtn"><i className="fa-solid fa-thumbs-up"></i></button>
        <button id="dislikeBtn"><i className="fa-solid fa-thumbs-down"></i></button>
      </div>
      </>
    )
}

export default App


