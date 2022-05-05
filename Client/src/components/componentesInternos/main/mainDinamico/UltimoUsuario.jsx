import React from "react"
import {useEffect, useState} from "react"
// import silueta from "../../assets/imagenes/descarga.png"

function UltimoUsuario(){

    let [ultimoUsuario, setUltimoU] = useState(0);
    let ultimoReg;

    useEffect(() => {
        async function traerUltimoUsuario(){
            const url = 'http://localhost:3001/api/users';
            const respu = await fetch(url);
            const data = await respu.json();
            console.log('%c datos de ususario','color:green', data);
            ultimoReg = data.data[data.data.length - 1];
            setUltimoU(ultimoReg);
            console.log(setUltimoU);
            console.log('%c ultimo ususario','color:black', ultimoReg);   

            //funcionDatosUltimoUsuario(data.data);
        }
        traerUltimoUsuario();
    },[])

    return(
        <div id="mainDinamico">
            <div id="dinamico">
                <h2>Ultimo usuario creado</h2>
                {/* <p><img src={silueta} alt="Silueta" /></p> */}
                <p>Nombre: {ultimoUsuario.nombre}</p>
                <p>Apellido: {ultimoUsuario.apellido}</p>
                <p>Dirección: {ultimoUsuario.direccion}</p>
                <p>Fecha de Nacimiento: {ultimoUsuario.fechaNacimiento}</p>
                <p>Rol: {ultimoUsuario.roleId}</p>
            </div>
        </div>
    )
}

export default UltimoUsuario

