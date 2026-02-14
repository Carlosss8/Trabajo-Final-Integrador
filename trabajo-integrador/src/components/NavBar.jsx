import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
    const navigate = useNavigate();

    const handleAuthClick = () => {
        if (user) {
            onLogout();
            navigate("/", { replace: true });
        } else {
            navigate("/login");
        }
    };

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
                {/* <li>
                    <NavLink to="/carrito" className="nav-link">Carrito</NavLink>
                </li>*/}
            </ul>
            <div className="button-sesion">
                <button onClick={handleAuthClick}>
                    {user ? "Cerrar sesión" : "Iniciar sesión"}
                </button>
            </div>
        </nav>
    );
};

export { Navbar };