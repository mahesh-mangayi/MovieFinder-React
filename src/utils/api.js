import { OMDB_CONFIG } from "../config.js"

const resolveOmdbApiKey = () => {
  
  const keyFromConfig = OMDB_CONFIG?.API_KEY
  const keyFromEnv = import.meta.env?.VITE_OMDB_API_KEY
  const resolved = keyFromConfig && keyFromConfig !== "your_api_key_here" ? keyFromConfig : keyFromEnv
  if (!resolved || resolved === "your_api_key_here") {
    throw new Error(
      "OMDb API key is missing"
    )
  }
  return resolved
}

export const searchMovies = async (query) => {
  try {
    const apiKey = resolveOmdbApiKey()
    const url = `${OMDB_CONFIG.BASE_URL}?apikey=${apiKey}&s=${encodeURIComponent(query)}&type=movie`

    // console.log("url", url);
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    const data = await response.json()

    if (data.Response === "True") {
      return data.Search.slice(0, 20) // Limit to 20 results
    } else {
      throw new Error(data.Error || "No movies found")
    }
  } catch (error) {
    throw new Error("Failed to fetch movies: " + error.message)
  }
}

export const getMovieDetails = async (imdbID) => {
  try {
    const apiKey = resolveOmdbApiKey()
    const url = `${OMDB_CONFIG.BASE_URL}?apikey=${apiKey}&i=${imdbID}&plot=short`

    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    const data = await response.json()

    if (data.Response === "True") {
      return data
    } else {
      throw new Error(data.Error || "Movie not found")
    }
  } catch (error) {
    throw new Error("Failed to fetch movie details: " + error.message)
  }
}
