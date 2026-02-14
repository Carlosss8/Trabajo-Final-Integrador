import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../views/Home";
import { Contacto } from "../views/Contacto"
import { Nosotros } from "../views/Nosotros"
import { Carrito } from "../views/Carrito"
import { Layout } from "../layouts/Layout";
import { ProtectedRoute } from "../router/ProtectedRoute";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { useAuth } from "../context/AuthContext"

const RouterApp = () => {

    const { currentUser, logout, loading } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout user={currentUser} onLogout={logout} />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route
                        path="/carrito"
                        element={
                            <ProtectedRoute>
                                <Carrito />
                            </ProtectedRoute>
                        }
                    />
                </Route>


            </Routes>
        </BrowserRouter >
    )
}

export { RouterApp }

