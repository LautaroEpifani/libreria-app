import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AgregarLibro from './AgregarLibro';
import EditarLibro from './EditarLibro';
import TablaLibros from './TablaLibros';
import librosData from './librosData';
import Novedades from '../Novedades';



const Administrador = () => {


 





  


  


  //state

  const [libros, setLibros] = useState(librosData);



  //effect

  useEffect(() => {

    if(localStorage.getItem("libros")) {
        setLibros(JSON.parse(localStorage.getItem("libros")));
    }


    }, [])

    useEffect(() => {

        localStorage.setItem("libros", JSON.stringify(libros)) //tenemos que transformar los todos en string.


    }, [libros])


  //Agregar libros

  const agregarLibro = (nuevoLibro) => {

      nuevoLibro.id = uuidv4()
      setLibros([    
        ...libros, nuevoLibro
      ])
  }


  //Eliminar libros
  const eliminarLibro = (id) => {

      

      setLibros(libros.filter(libro => libro.id !== id))
  }



  //Editar libros

  const [editar, setEditar] = useState(false);

  const [libroActual, setLibroActual] = useState({
    id: null, nombre:'', autor:'', imagen: ``
  })


  const tablaEditar = (libro) => {


      setEditar(true);
      setLibroActual({
        id: libro.id, nombre:libro.nombre, autor: libro.autor, imagen: libro.imagen
      })
  }



  const actualizalibro = (id, libroActualizado) => {
      setEditar(false);


      setLibros(libros.map(libro => (libro.id === id ? libroActualizado : libro)))
  }


  // Novedades componente

  const [novedades, setNovedades] = useState(false);
  



    return (


        

        <div className="relative mx-auto  w-4/5 md:w-3/5 my-10 bg-gray-200 text-center">
            <h1 className="titulo text-center font-bold font-rale mb-4">Administrador Libros</h1>
            <div className="flex justify-center gap-x-60">
               
            
            
            {editar ? (

                <div >
                    <h2 className="text-center font-bold font-rale">Editar libro</h2>
                    <EditarLibro 
                    libroActual={libroActual}
                    actualizalibro={actualizalibro}/>

                </div>


            ) : (
            
                <div >
                    <h2 className="text-center font-bold font-rale">Agregar Libro</h2>
                <AgregarLibro agregarLibro={agregarLibro} />

                </div>

            )}
            
            


                

            {novedades ? (
            
                <div className="w-1/2">
                    <h2 className="text-center font-bold font-rale mb-2">Libros</h2>
                    <TablaLibros libros={libros} 
                    eliminarLibro={eliminarLibro}
                    setEditar={setEditar}
                    tablaEditar={tablaEditar}/>
                </div>

                ) : (


                <Novedades libros={libros}/>
                


                )}


            </div>
            
        </div>


           


        
    )


}

export default Administrador
