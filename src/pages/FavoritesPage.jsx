import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MovieCard from "../components/MovieCard"
import { useFavorites } from "../context/FavoritesContext"
import "./FavoritesPage.css"

const FavoritesPage = () => {
  const { favorites } = useFavorites()

  return (
    <div className="favorites-page">
      <Navbar />

      <main className="main-content">
        <div className="favorites-container">
          <h1 className="page-title">My Favorites</h1>

          {favorites.length > 0 ? (
            <>
              <p className="favorites-count">
                You have {favorites.length} favorite movie{favorites.length !== 1 ? "s" : ""}
              </p>
              <div className="movies-grid">
                {favorites.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h2>You have no favorites yet</h2>
              <p>Start exploring movies and add them to your favorites by clicking the heart icon!</p>
              <a href="/" className="browse-movies-btn">
                Browse Movies
              </a>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default FavoritesPage
