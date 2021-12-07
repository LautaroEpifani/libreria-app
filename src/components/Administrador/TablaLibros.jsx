import React from 'react';

const TablaLibros = (props) => {

    console.log(props.libros)

    return ( 

        <table className="table table-auto">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Autor</th>
            <th>Portada</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>

           { 
                props.libros.length > 0 ?
                props.libros.map(libro =>(

                    <tr  key={libro.id}>
                      <td>{libro.nombre}</td>
                      <td>{libro.autor}</td>
                      <td><img src={libro.imagen} alt="" width="100" height="60"/></td>
                      <td>
                      <button className="button boton w-full  bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 rounded text-white font-rale"
                      onClick={() => {props.tablaEditar(libro)}}>Editar</button>

                      <button className="boton w-full  bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 rounded text-white font-rale"
                      onClick={() => {props.eliminarLibro(libro.id)}}>Eliminar</button>
                    </td>
                  </tr>


                )) : (
                    <tr>
                     <td colSpan={3}>No hay libros</td>
                    </tr>
                )



            }
         
        </tbody>
      </table>
     );
}
 
export default TablaLibros;