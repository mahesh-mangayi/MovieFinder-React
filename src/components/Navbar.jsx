import { Link, useLocation } from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <strong>MovieFinder</strong>
      </div>
      <ul className="navbar-nav">
        <li>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" || location.pathname === "/home" ? "active" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/favorites" className={`nav-link ${location.pathname === "/favorites" ? "active" : ""}`}>
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
