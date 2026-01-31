import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import "../styles/Layout.css"

const Layout = () => {
    return (
        <>
            <div className="layout">
                <Navbar />

                <main className="content">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </>
    );
};

export { Layout }
