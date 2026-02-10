import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import "../styles/Layout.css"

const Layout = ({ onLogin, onLogout, isAuth }) => {
    return (
        <>
            <div className="layout">
                <Navbar onLogin={onLogin} onLogout={onLogout} isAuth={isAuth} />

                <main className="content">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};

export { Layout }
