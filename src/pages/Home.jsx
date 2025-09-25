"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import MovieGrid from "../components/MovieGrid"
import { searchMovies } from "../utils/api"
import "../styles/Home.css"

const Home = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async (query) => {
    setIsLoading(true)
    setError("")
    setSearchQuery(query)
    setHasSearched(true)

    try {
      const results = await searchMovies(query)
      setMovies(results)
    } catch (err) {
      setError(err.message)
      setMovies([])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="home-page">
      <Navbar />

      <main className="main-content">
        {/* Header Section */}
        <div className="hero-section">
          <h1 className="app-title">MovieFinder</h1>
          <p className="app-tagline">Find your next favorite movie!</p>

          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Search Results Section */}
        {hasSearched && (
          <div className="results-section">
            {isLoading && (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Searching for movies...</p>
              </div>
            )}

            {error && (
              <div className="error-container">
                <p className="error-message">{error}</p>
              </div>
            )}

            {!isLoading && !error && movies.length > 0 && (
              <>
                <h2 className="results-heading">
                  Showing {movies.length} results for "{searchQuery}"
                </h2>
                <MovieGrid movies={movies} />
              </>
            )}

            {!isLoading && !error && movies.length === 0 && hasSearched && (
              <div className="no-results">
                <p>No movies found for "{searchQuery}". Try a different search term.</p>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Home
