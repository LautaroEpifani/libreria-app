import React from 'react';
import { useForm } from "react-hook-form";

const EditarLibro = (props) => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: props.libroActual
    });

    setValue('nombre', props.libroActual.nombre)
    setValue('autor', props.libroActual.autor)


    const onSubmit = (data, e) => {
        

        data.id = props.libroActual.id
        props.actualizalibro(props.libroActual.id, data)
        e.target.reset()
    }

    return ( 
        <form className="flex flex-col content-between" onSubmit={handleSubmit(onSubmit)}>
            <label className="mt-4">Nombre</label>

             <input type="text" nombre="nombre" {...register("nombre", { required: true })}  />
             {errors.nombre && <span>This field is required</span>}

            <label className="mt-4">Autor</label>

            <input type="text" nombre="autor" {...register("autor", { required: true })} />
            {errors.autor && <span>This field is required</span>}
         <button className="boton w-full my-4  bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 rounded text-white font-rale" type="submit">Editar Libro</button>
    </form>
     );
}
 
export default EditarLibro;