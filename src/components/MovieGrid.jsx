import MovieCard from "./MovieCard"
import "../styles/MovieGrid.css"

const MovieGrid = ({ movies }) => {
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}

export default MovieGrid
