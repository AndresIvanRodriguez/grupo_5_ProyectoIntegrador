import React from "react";
import imagen from "../../assets/imagenes/DevBiker1.png"

function Header (){
    return(
        <div id="header">
            {/* <div id="titulo">
                <h1>Dashboard</h1>
            </div> */}

            <div id="logo">
                <a href="/"><img src={imagen} alt="Logo-Devbiker"/></a>
            </div>
        </div>
    )

}
export default Header;



