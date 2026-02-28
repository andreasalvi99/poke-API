import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg position-sticki top 0"
      style={{ backgroundColor: "#6cbef9" }}
    >
      <div className="container-fluid">
        <img
          src="ChatGPT Image 28 feb 2026, 13_07_14.png"
          alt=""
          className="navbar-logo"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav gap-4">
            <NavLink to={"/"} className="nav-link text-light">
              Home
            </NavLink>
            <NavLink to={"/pokedex"} className="nav-link text-light">
              Pokedex
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
