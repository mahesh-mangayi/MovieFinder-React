import { Routes, Route } from "react-router-dom"
import Home from "./pages/HomePage"
import Favorites from "./pages/FavoritesPage"
import { FavoritesProvider } from "./context/FavoritesContext"
import "./App.css"

function App() {
  return (
    <FavoritesProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </FavoritesProvider>
  )
}

export default App
