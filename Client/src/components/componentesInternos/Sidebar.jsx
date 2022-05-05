import React from "react";
import Dashboard2 from "../../assets/imagenes/img-Dashboard2.jpg"
import profile from "../../assets/imagenes/BERNAL_Egan.jpg"
import {Link} from "react-router-dom";

function Sidebar(){
    return(
        <div  id="SideBar">

            <div id="menu">
                <div id="titleMenu">
                    <h2>Dashboard</h2>
                </div>
                <div id="imgMenu">
                    <Link to="/">
                        <img src={Dashboard2} alt="bike"/>
                    </Link>
                </div>
            </div>
            <div id="profile">
                <div id="nombre">
                    <p>Edgan Bernal</p>
                </div>
                <div id="imgProfile">
                    <img src={profile} alt="fotoPerfil"/>
                </div>
            </div>
            <div id="navBar">
                <div>
                    <Link to="/ultimoUsuario">
                        <p>Ultimo usuario creado</p>
                    </Link>
                </div>
                <div>
                    <Link to="/ultimoProducto">
                        <p>Ultimo producto creado</p>    
                    </Link> 
                </div>
                <div>
                    <Link to="/listakdoCategorias" >
                        <p>Listado de categorias</p>
                    </Link>
                </div>
                <div>
                    <Link to="/listadoProductos">
                        <p>Listado de productos</p>
                    </Link> 
                </div>
            </div>
        </div>
    )
}
export default Sidebar; 