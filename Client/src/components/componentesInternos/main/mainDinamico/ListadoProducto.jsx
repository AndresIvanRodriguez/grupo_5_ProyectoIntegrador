import React from "react"
import { useEffect, useState } from "react"

function ListadoProducto() {

    let [productos, setProductos] = useState([]);

    useEffect(() => {
        async function traerProductos() {
            const url = "http://localhost:3001/api/products";
            const respond = await fetch(url);
            const data = await respond.json();
            console.log('%c datos de categorias ', 'color:blue', data)
            setProductos(data.data);
        }
        traerProductos();
    }, [])
    console.log(productos);

    return (
        <div id="mainDinamico">
            <div id="dinamico">
            <div>
                <h2>Listado de Productos</h2>
            </div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                </tr>
                <tr>
                    <td>
                        {productos.map((producto, i) => {
                            return (
                                <tr key={i}>
                                    {producto.id}
                                </tr>
                            )
                        }
                        )}
                    </td>
                    <td>
                        {productos.map((producto, i) => {
                            return (
                                <tr key={i}>
                                    {producto.nombre}
                                </tr>
                            )
                        }
                        )}
                    </td> 
                    <td>
                        {productos.map((producto, i) => {
                            return (
                                <tr key={i}>
                                    {producto.descripcion}
                                </tr>
                            )
                        }
                        )}
                    </td> 
                    <td>
                        {productos.map((producto, i) => {
                            return (
                                <tr key={i}>
                                    {producto.precio}
                                </tr>
                            )
                        }
                        )}
                    </td>
                </tr>         
            </table>
            </div>
        </div>
    )
}

export default ListadoProducto;