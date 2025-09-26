import { createContext, useContext, useState, useEffect } from "react"

const FavoritesContext = createContext()

export const useFavorites = () => {
  return useContext(FavoritesContext);
}

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  
  useEffect(() => {
    const savedFavorites = localStorage.getItem("moviefinder-favorites")
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("moviefinder-favorites", JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie])
  }

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.imdbID !== movieId))
  }

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.imdbID === movieId)
  }

  const toggleFavorite = (movie) => {
    if (isFavorite(movie.imdbID)) {
      removeFromFavorites(movie.imdbID)
    } else {
      addToFavorites(movie)
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
