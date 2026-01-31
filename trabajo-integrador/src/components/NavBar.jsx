import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
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

        </nav>
    );
};

export { Navbar };