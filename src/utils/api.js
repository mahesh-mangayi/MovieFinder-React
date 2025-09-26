import { OMDB_CONFIG } from "../config.js"


export const searchMovies = async (query) => {
  try {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY || "Your_OMDB_API_Key_Here"
    const url = `${OMDB_CONFIG.BASE_URL}?apikey=${apiKey}&s=${encodeURIComponent(query)}&type=movie`

    // console.log("url", url);
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    const data = await response.json()
    
    // console.log("data", data);

    if (data.Response === "True") {
      return data.Search.slice(0, 20) 
    } else {
      throw new Error(data.Error || "No movies found")
    }

  } catch (error) {
    throw new Error("Failed to fetch movies: " + error.message)
  }
}
