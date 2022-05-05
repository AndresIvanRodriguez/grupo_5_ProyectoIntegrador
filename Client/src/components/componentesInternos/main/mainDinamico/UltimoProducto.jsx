import React from "react"
import {useEffect, useState} from "react"

function UltimoProducto(){

    let [ultimoProducto, setUltimoProducto] = useState(0);
    let ultimoReg;

    useEffect(() => {
        async function traerUltimoProduct(){
            const url = 'http://localhost:3001/api/products';
            const respu = await fetch(url);
            const data = await respu.json();
            console.log('%c datos de ususario','color:green', data);
            ultimoReg = data.data[data.data.length - 1];
            setUltimoProducto(ultimoReg);
            console.log(setUltimoProducto);
            console.log('%c ultimo ususario','color:black', ultimoReg);   

            //funcionDatosUltimoUsuario(data.data);
        }
        traerUltimoProduct();
    },[])

    return(
        <div id="mainDinamico">
            <div id="dinamico">
                <h2>Ultimo producto creado</h2>
                <p>Id: {ultimoProducto.id}</p>
                <p>Nombre: {ultimoProducto.nombre}</p>
                <p>Descripcion: {ultimoProducto.descripcion}</p>
                <p>Precio: {ultimoProducto.precio}</p>
            </div>
        </div>
    )
}

export default UltimoProducto