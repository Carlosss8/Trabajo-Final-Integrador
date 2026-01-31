import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import { Home } from "../views/home";
import { Contacto } from "../views/Contacto"
import { Nosotros } from "../views/Nosotros"
import { Carrito } from "../views/Carrito"

const RouterApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/carrito" element={<Carrito />} />

            </Routes>
        </BrowserRouter>
    )
}

export { RouterApp }

