import React from "react";
import {useEffect, useState} from "react"

function TotalUsuarios(){

    let [totalUsuarios, setUsuarios]= useState([])

    useEffect(()=>{
        async function traerUsuarios(){
         const url ="http://localhost:3001/api/users";
         const respond= await fetch(url);
         const data= await respond.json();
         console.log(data)
         console.log('%cse se actualizaron lacantidad de usuarios', 'color:blue')
        setUsuarios(data.meta.total);
        console.log(' el total ususarios es :',totalUsuarios)
        }
        traerUsuarios();
    },[])

    return(
        <div id="container">
            <div>
                <p className="text">Total usuarios</p>
                <p className="numero">{totalUsuarios}</p>
            </div>
            <div id="icon">
                <i className="fa-solid fa-users"></i>
            </div>
        </div>
    )
}
export default TotalUsuarios