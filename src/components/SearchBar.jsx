"use client"

import { useState } from "react"
import "../styles/SearchBar.css"

const SearchBar = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className="search-input"
          disabled={isLoading}
        />
        <button type="submit" className="search-button" disabled={isLoading || !query.trim()}>
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  )
}

export default SearchBar
