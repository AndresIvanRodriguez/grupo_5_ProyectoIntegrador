import {useEffect,useState} from "react";

function TotalProductos(){

    let [cantidadProductos, setCantidad] = useState([]);
    
    useEffect(()=>{
        async function traerProductos(){
           // const url = 'https://www.omdbapi.com/?apikey=c6b55782&s=action';
            const url = 'http://localhost:3001/api/products';
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data.meta);
            console.log('%cse se cargo la cantidad de productos','color:green')
            setCantidad(data.meta.total);
            console.log('la cantidad de productos es:  ', cantidadProductos)
        }
        traerProductos();
    },[]
    )

    return(
    
              <div id="container">
                    <div>
                        <p className="text">Total productos</p>
                        <p className="numero">{cantidadProductos}</p>
                    </div>
                    <div id="icon">
                        <i className="fa-solid fa-bicycle"></i>
                    </div>
                </div>     
    )
}
export default TotalProductos