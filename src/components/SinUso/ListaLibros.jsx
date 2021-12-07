import { useEffect, useState } from "react"
import EditarLibro from "../Administrador/EditarLibro"
import Formulario from ".SinUso/Formulario"
import Libro from "./Libro"



const ListaLibros = () => {


    const [libros, setLibros] = useState([])



    useEffect(() => {

        if(localStorage.getItem("libros")) {
            setLibros(JSON.parse(localStorage.getItem("libros")));
        }


    }, []) //Los corchetes son para que al renderizar el sitio web se ejecute el use Effect una sola vez. 

    useEffect(() => {

        localStorage.setItem("libros", JSON.stringify(libros)) //tenemos que transformar los Libros en string.


    }, [libros]) //Este es para que cada vez que se editar los Libros/obejtos queremos que la info se guarde en el local storage y se vuelva a renderizar la pag con nuevos datos. Eso es el UseEffect.



    const agregarLibro = libro => { //Este "Libro" es opcional. Es igual si pongo e.

        console.log(libro)
        setLibros(
            [...libros, libro]  //setLibros((old => [...old, Libro]))
        )
    }

    const eliminarLibro = (id) => {

        setLibros((libros) => libros.filter((item) => item.id !== id)

        )
    }








    //PROBANDO EL EDITAR




    const [editing, setEditing] = useState(false)

    const [currentUser, setCurrentUser] = useState({
        id: null, nombre:'', autor:'', estado:false, prioridad:false
    })


    
    const editRow = (libro) => {


        setEditing(true);
        setCurrentUser({
            id: libro.id, autor:libro.autor, estado: libro.estado, prioridad: libro.prioridad
        })
    }



    const updateUser = (id, updatedUser) => {
        setEditing(false);


        setLibros(libros.map(libro => (libro.id === id ? updatedUser : libro)))
    }






     const editarLibro = id => {

         const editarLibros = libros.map(item => (//return implicito por los paréntesis.

             item.id === id ? {...item, estado: !item.estado, nombre: item.nombre} : item //!item.estado para que al devolver el item el estado pasa a ser el contrario. En caso de no coincidir el id, el map sigue el recorrido y devuelve el item.
        ))

        setLibros(editarLibros)
     }

    

    return (

        <>
         
         {editing ? (

                    <div>
                        <h2>Editar Libro</h2>
                        <EditarLibro 
                        currentUser={currentUser}
                        updateUser={updateUser}/>
                    </div>
                ) : (

                    <Formulario agregarLibro={agregarLibro} 
                    />

                         

                

                )}
            
                <ul className="list-group list-group-numbered mt-4">
                {
                    libros.map((item) => (
                        <Libro key={item.id} 
                        libro={item} 
                        eliminarLibro={eliminarLibro}
                        editarLibro={editarLibro}
                        setEditing={setEditing}
                        editRow={editRow}
                        />

                        
                    ))
                }
                </ul>




                
        </>
    )
}

export default ListaLibros
