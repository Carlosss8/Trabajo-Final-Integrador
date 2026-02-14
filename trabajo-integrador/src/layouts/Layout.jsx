import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import "../styles/Layout.css"

const Layout = ({ user, onLogout }) => {
    return (
        <>
            <div className="layout">
                <Navbar user={user} onLogout={onLogout} />

                <main className="content">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};

export { Layout }
