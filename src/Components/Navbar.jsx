import { Link } from "react-router-dom";
import { useGlobalContext } from "../Components/utils/global.context";

const Navbar = () => {
  const { state, toggleTheme } = useGlobalContext();
  return (
    <nav className={`navbar ${state.theme}`}>
      <div className="navbar-left">
        <img src="./DH.ico" alt="DH Logo" className="navbar-logo" />
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
      </ul>

      <div className="themeToggle">
        <button onClick={toggleTheme}>
          {state.theme === "light" ? "🌞 Modo Claro" : "🌜 Modo Oscuro"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
