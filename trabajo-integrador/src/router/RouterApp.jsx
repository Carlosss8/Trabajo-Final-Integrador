import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import { Home } from "../views/home";
import { Contacto } from "../views/Contacto"
import { Nosotros } from "../views/Nosotros"
import { Carrito } from "../views/Carrito"
import { Layout } from "../layouts/Layout";
import { ProtectedRoute } from "../router/ProtectedRoute";
import { Login } from "../views/Login";

const RouterApp = () => {

    const [isAuth, setIsAuth] = useState(
        JSON.parse(localStorage.getItem("isAuth")) || false
    );

    const login = () => {
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
    };

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("isAuth");
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout onLogin={login} onLogout={logout} isAuth={isAuth} />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="/login" element={<Login onLogin={login} />} />

                    <Route
                        element={
                            <ProtectedRoute isAuth={isAuth}>
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

