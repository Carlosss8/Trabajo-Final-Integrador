import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Layout.css";

const Login = ({ onLogin }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = () => {
        onLogin();
        navigate(from, { replace: true });
    };

    return (
        <>
            <main className="contenido-producto">
                <div className="card-login">
                    <h2>Debes loguearte o registrarte para seguir viendo o comprar nuestros productos</h2>
                    <button className="button-login" onClick={() => navigate(-1)}>Volver</button>
                    <button className="button-login" onClick={handleLogin}>Iniciar sesion</button>
                </div>
            </main>
        </>
    );
};

export { Login };