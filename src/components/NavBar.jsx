import { Link } from "react-router-dom";
import "./NavBar.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-title">
        <h1>Marvel Heroes</h1>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos ❤</Link>
      </div>
    </nav>
  );
}

export default Nav;
