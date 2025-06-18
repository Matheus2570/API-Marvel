import { Link } from "react-router-dom";
import "./NavBar.css";

function Nav() {
  return (
    <header className="nav">
      <div className="nav-title">
        <h1>Marvel Heroes</h1>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos ❤</Link>
      </div>
    </header>
  );
}

export default Nav;
