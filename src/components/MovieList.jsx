import { Link } from "react-router-dom"
import MovieCard from "./MovieCard"



function MovieList({ movies }) {
  if (movies.length === 0){
    return <p>No Movies Found</p>
  }
  return (
    <div>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={(movies.imdbID)} movie={movie}/>
        ))}
        </div>
    </div>
  )
}

export default MovieList