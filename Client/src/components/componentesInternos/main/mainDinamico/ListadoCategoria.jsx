import React from "react"
import { useEffect, useState } from "react"

function ListadoCategoria(){

    let [categorias, setCategorias] = useState([]);

    useEffect(() => {
        async function traerCategorias(){
        const url ="http://localhost:3001/api/categorie";
        const respond = await fetch(url);
        const data = await respond.json();
        console.log('%c datos de categorias ', 'color:blue', data)
        setCategorias(data.data);
        }
        traerCategorias();
    },[])
    console.log(categorias);

    return(
        <div id="mainDinamico">
            <div id="dinamico">
            <div>
                <h2>Listado de Categorias</h2>
            </div>
            <div>
                {categorias.map((categoria, i) => {
                    return (
                        <li key={i}>
                            {categoria.nombreCategoria}
                        </li>
                    )
                })}
            </div>
            </div>      
            
        </div>
    )
}

export default ListadoCategoria