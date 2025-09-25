import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import { FavoritesProvider } from "./context/FavoritesContext"
import "./styles/App.css"

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
