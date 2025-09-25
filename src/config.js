// TMDB API configuration
export const TMDB_CONFIG = {
  API_KEY: import.meta.env.VITE_TMDB_API_KEY || "your_api_key_here",
  BASE_URL: "https://api.themoviedb.org/3",
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500",
  SEARCH_ENDPOINT: "/search/movie",
}

// OMDb API configuration (fallback)
export const OMDB_CONFIG = {
  API_KEY: import.meta.env.VITE_OMDB_API_KEY || "your_api_key_here",
  BASE_URL: "https://www.omdbapi.com",
}
