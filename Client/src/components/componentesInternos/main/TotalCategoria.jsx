import React from "react";
import {useEffect,useState} from "react"

function TotalCategoria(){

    const [totalCategoria, setCategoria] = useState();
    
    useEffect(()=>{
        async function totalCategoria(){
            const url = 'http://localhost:3001/api/categorie';
            const respond = await fetch(url);
            const data = await respond.json();
            console.log('se cargaron las categorias', data)
            setCategoria(data.meta.total)
        }
        totalCategoria();
    },[]) 

    return(
        <div id="container">
            <div>
                <p className="text">Total categorias</p>
                <p className="numero">{totalCategoria}</p>
            </div>
            <div id="icon">
                <i className="fa-solid fa-sitemap"></i>
            </div>
        </div>
    )
}

export default TotalCategoria;