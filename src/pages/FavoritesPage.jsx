import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MovieCard from "../components/MovieCard"
import { useFavorites } from "../context/FavoritesContext"
import "../styles/FavoritesPage.css"

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
              <h2>You have no favorites yet</h2>
              <p>Start exploring movies and add them to your favorites by clicking the heart icon!</p>
              <a href="/home" className="browse-movies-btn">
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
