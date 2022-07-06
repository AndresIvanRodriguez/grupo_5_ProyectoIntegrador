import React from "react";
import TotalCategoria from "./TotalCategoria";
import TotalProductos from "./TotalProductos";
import TotalUsuarios from "./TotalUsuarios";
import MainDina from "../main/mainDinamico/MainDina";
import UltimoUsuario from "./mainDinamico/UltimoUsuario";
import ListadoProducto from "./mainDinamico/ListadoProducto"
import UltimoProducto from "./mainDinamico/UltimoProducto";
import ListadoCategoria from "./mainDinamico/ListadoCategoria";
import Error404 from "./mainDinamico/Error404";

import { Routes, Route } from "react-router-dom";

function Main() {
    return (
        <div id="main">

            <div id="dashboard">
                <TotalProductos />
                <TotalUsuarios />
                <TotalCategoria />
            </div>

            <Routes>
                <Route path='/' element={<MainDina />} />
                <Route path="/ultimoUsuario" element={<UltimoUsuario />} />
                <Route path="/ultimoProducto" element={<UltimoProducto />} />
                <Route path="/listadoProductos" element={<ListadoProducto />} />
                <Route path="/listakdoCategorias" element={<ListadoCategoria />} />
                <Route path="*" element={<Error404 />} />
            </Routes>

        </div>
    )
}

export default Main;