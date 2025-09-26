import { useFavorites } from "../context/FavoritesContext"
import "../styles/MovieCard.css"

const MovieCard = ({ movie }) => {
  const { isFavorite, toggleFavorite } = useFavorites()
  const isMovieFavorite = isFavorite(movie.imdbID)

  const handleFavoriteClick = (e) => {
    e.preventDefault()
    toggleFavorite(movie)
  }

  const handleImdbClick = () => {
    window.open(`https://www.imdb.com/title/${movie.imdbID}`, "_blank", "noopener,noreferrer")
  }

  const posterUrl = movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"

  return (
    <div className="movie-card">
      <div className="poster-container">
        <img
          src={posterUrl || "/placeholder.svg"}
          alt={`${movie.Title} poster`}
          className="movie-poster"
          onError={(e) => {
            e.target.src = "/placeholder.png"
          }}
        />
        <button
          className="favorite-button"
          onClick={handleFavoriteClick}
        >
          <svg
            className={`heart-icon ${isMovieFavorite ? "favorited" : ""}`}
            viewBox="0 0 24 24"
            fill={isMovieFavorite ? "#ff4757" : "none"}
            stroke="white"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
        <button className="imdb-link" onClick={handleImdbClick}>
          View on IMDb
        </button>
      </div>
    </div>
  )
}

export default MovieCard
