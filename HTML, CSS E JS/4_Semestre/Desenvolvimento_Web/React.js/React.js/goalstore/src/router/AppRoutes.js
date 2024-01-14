import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import  {Admin}  from "../pages/admin/Admin.js";
import  {Estoque}  from "../pages/estoque/Estoque.js";
import  LandingPage  from "../pages/landingPage/LandingPage.js";
import  Login  from "../pages/login/Login.js";
import  Gerencia  from "../pages/gerencia/Gerencia.js"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<Admin />} />
                <Route path="/estoque" element={<Estoque />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/gerencia" element={<Gerencia />} />

            </Routes>
        </BrowserRouter>
    )
}
