# MovieFinder (React + Vite)

A fast, minimal movie search app built with React, Vite, and the OMDb API. Search for movies, open IMDb pages, and save favorites locally in your browser.

## Features

- Search movies via OMDb API
- Add/remove favorites with a heart toggle
- Persist favorites in `localStorage`
- Open movie pages on IMDb in a new tab
- Client-side routing for Home and Favorites pages

## Tech Stack

- React 19, React Router 6
- Vite 7
- Context API for state management
- Vanilla CSS modules per page/component

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- OMDb API key (free): `https://www.omdbapi.com/apikey.aspx`

### Installation
1) Install dependencies
```bash
npm install
```

2) Configure environment variables
Create a `.env` in the project root and set your OMDb key:
```bash
VITE_OMDB_API_KEY=your_omdb_key_here
```
Note: Restart the dev server after changing `.env`.

3) Start the dev server
```bash
npm run dev
```
Then open the printed local URL (e.g., `http://localhost:5173`).

### Build & Preview
```bash
npm run build
npm run preview
```

## Project Structure
```
src/
  components/
    Footer.jsx
    MovieCard.jsx
    Navbar.jsx
    SearchBar.jsx
  context/
    FavoritesContext.jsx
  pages/
    HomePage.jsx
    FavoritesPage.jsx
  utils/
    api.js
  App.jsx
  main.jsx
```

- `utils/api.js`: wraps OMDb search (`s=`) with error handling and caps results to 20.
- `context/FavoritesContext.jsx`: provides favorites state, persistence, and helpers.
- `pages/HomePage.jsx`: search flow, loading and error UI, results grid.
- `pages/FavoritesPage.jsx`: list and manage saved favorites.
- `components/MovieCard.jsx`: poster, year, IMDb button, favorite toggle.

## Configuration
- `src/config.js` holds `OMDB_CONFIG.BASE_URL`. The API key is read from `import.meta.env.VITE_OMDB_API_KEY` with a fallback string for development.

## Scripts
- `npm run dev`: Start Vite dev server
- `npm run build`: Production build
- `npm run preview`: Preview the production build
- `npm run lint`: Lint source files

## Troubleshooting
- "Failed to fetch movies" or missing key: ensure `VITE_OMDB_API_KEY` is set and the dev server is restarted.
- OMDb usage: base URL `https://www.omdbapi.com`, search parameter `s`, type `movie`.
- Network/CORS: The app fetches directly from OMDb; verify connectivity and that your key is active.

## Notes
- Favorites are stored in `localStorage` under the key `moviefinder-favorites`.
- Placeholder image is used when a movie poster is `N/A`.

## License
This project is provided as-is for learning/demo purposes.

