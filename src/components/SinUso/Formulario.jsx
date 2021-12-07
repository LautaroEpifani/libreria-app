import { useState } from "react"
import Swal from "sweetalert2"
import { v4 as uuidv4 } from 'uuid';



const Formulario = ({agregarLibro}) => {


    const initialState = {

        nombre: '',
        autor: '',
        estado: 'pendiente',
        prioridad: false

    }

    

    const [libro, setLibro] = useState(initialState)  
   

    

    
    

    const {nombre,autor,estado,prioridad} = libro

    

    const handleChange = (e) => {   

            const {name, value, checked, type} = e.target

            setLibro({...libro,
                [name]: type === "checkbox" ? checked : value})
            
    }


    const handleSubmit = e => {
        e.preventDefault()
       

        if(!nombre.trim() || !autor.trim()) {
        
        

                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No dejar en blanco!',
                footer: '<a href="">Why do I have this issue?</a>'
                })

            

            return
        }

            Swal.fire({
            icon: 'success',
            title: 'ÉXITO',
            text: 'Se agregó',
            
            })


        agregarLibro({
            nombre: nombre,
            autor: autor,
            estado: estado === 'pendiente' ? false : true,
            prioridad: prioridad,
            id: uuidv4()

        })

        setLibro(initialState)     
        
    }

    
    

    return (
        <>
        <h3 className="mt-10">Agregar Libro</h3>
        <form onSubmit={handleSubmit} action="" className="mt-10">
            <input 
            type="text"
            className="form-control mb-2"
            name="nombre"
            placeholder="nombre" 
            value={nombre}
            onChange={handleChange}
            />

            <textarea 
            name="autor"
            className="form-control mb-2"
            placeholder="autor"
            value={autor}
            onChange={handleChange}/>

            <select name="estado" className="form-control mb-2"
            value={estado}
            onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>

            </select>

            <div className="form-check">
                <input type="checkbox" 
                id="flexCheckDefault"
                className="form-check-input"
                name="prioridad" 
                checked={prioridad}
                onChange={handleChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
            </div>

            <button type="submit" className="btn btn-primary">Agregar</button>




         </form>

         </>
    )
}

export default Formulario
