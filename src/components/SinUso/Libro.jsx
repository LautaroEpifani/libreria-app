


const Libro = ({libro, eliminarLibro, editarLibro, editRow}) => { //editarLibro

    

    const {id, nombre,autor, estado, prioridad } = libro


    

    return (
        <>
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                    <div className="fw-bold">{nombre} ({estado ? 'Finalizado' : 'Pendiente'})</div>
                    <p>{autor}</p>
                <div>
                    <button className="btn btn-sm btn-danger me-1"
                    onClick={() => eliminarLibro(id)}>
                        Eliminar
                    </button>
                    <button className="btn btn-sm btn-warning me-1"
                    onClick={() => editarLibro(id)}  
                    >
                        Editar
                    </button>
                </div>
            </div>
            <span className="badge bg-primary rounded-pill"
            >
                {prioridad && "Prioritario"}
            </span>
        </li>
        </>
    )
}

export default Libro
