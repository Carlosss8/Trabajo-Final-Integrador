import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import "../styles/Layout.css"

const Layout = ({ onLogin, onLogout, isAuth }) => {
    return (
        <>
            <div className="layout">
                <Navbar onLogin={onLogin} onLogout={onLogout} isAuth={isAuth} />

                <main className="content">
                    <Outlet />
                </main>

            </div>
        </>
    );
};

export { Layout }
