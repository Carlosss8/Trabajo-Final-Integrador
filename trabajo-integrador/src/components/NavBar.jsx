import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ onLogin, onLogout, isAuth }) => {
    return (
        <nav className="navbar">
            <div className="nav-left"></div>
            <ul className="navbar-list">
                <li>
                    <NavLink to="/" end className="nav-link"> Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
                </li>
                <li>
                    <NavLink to="/carrito" className="nav-link">Carrito</NavLink>
                </li>
            </ul>
            <div className="button-sesion">
                {isAuth ? (
                    <button onClick={onLogout}>Cerrar sesión</button>
                ) : (
                    <button onClick={onLogin}>Iniciar sesión</button>
                )}
            </div>
        </nav>
    );
};

export { Navbar };