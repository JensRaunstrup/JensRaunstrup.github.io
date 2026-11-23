import { useState } from 'react'

import './App.css'

import MovieTitle from './components/Movie-title/Movie-title'
import MoviePoster from './components/Movie-poster/Movie-poster'
import MovieDescription from './components/Movie-description/Movie-description'
import LikeDislikeButtons from './components/Like-dislike-buttons/Like-dislike-buttons'
import SearchForMovies from './components/Search-for-movies/Search-for-movies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="websiteTitle">🍿 Film finder 🍿</h1>
      </div>
      <SearchForMovies />
      <MovieTitle />
      <MoviePoster />
      <MovieDescription />
      <LikeDislikeButtons />
    </>
  )
}

export default App
