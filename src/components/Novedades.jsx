import { useState } from "react"
import librosData from "./Administrador/librosData";




const Novedades = () => {

    const [novIndex, setNovIndex] = useState(1);

    const [libros, setLibros] = useState(librosData);
   


    const index = 0;


    const moveDot = index => {

        setNovIndex(index)
    }


    return (
         <div className="contenedor_novedades relative bg-gray-200">    
          <div className="novedades relative mx-auto  w-4/5 md:w-3/5 my-10 bg-gray-200 text-center">
               <div className="titulo_dos mb-10 text-center font-bold font-rale">
                         <p>Novedades</p>
                </div>

            <div  className={novIndex === index + 1 ? "nov block" : "nov absolute hidden"}>       
                <div className="nov grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center" >
                {libros.slice(0,6).map(libro =>   (

                    
                    
                    <div >
                        <img src={libro.imagen} alt="" width="100" height="60"/>
                    </div>
                    
                    ))} 
                </div>
            </div>


            <div  className={novIndex === index + 2 ? "nov block" : "nov absolute hidden"}>       
                <div className="nov grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center" >
                {libros.slice(6,12).map(libro =>   (
                    
                    <div >
                        <img src={libro.imagen} alt="" width="100" height="60"/>
                    </div>
                    
                    ))} 
                </div>
            </div>


            <div  className={novIndex === index + 3 ? "nov block" : "nov absolute hidden"}>       
                <div className="nov grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center" >
                {libros.slice(12,18).map(libro  =>   (
                    
                    <div >
                        <img src={libro.imagen} alt="" width="100" height="60"/>
                    </div>
                    
                    ))} 
                </div>
            </div>

            

      


             {/* {Array.from({length:1}).map((item, index) =>  
                 (
                <div  className={novIndex === index + 1 ? "nov block" : "nov absolute hidden"}>
                    
                            <div className="nov flex justify-between ml-15 my-20 lg:gap-16 md:gap-24 ">    
                                <img src={`/imageNov/peste.jpg`} alt="" width="100" height="60"/>
                                <img src={`/imageNov/loque.jpg` } alt="" width="100" height="60"/>
                                <img src={`/imageNov/castillo.jpg`} alt="" width="100" height="60"/>
                            </div> 

                            <div className="nov flex justify-between ml-15 my-20 lg:gap-16 md:gap-24 ">    
                                <img src={`/imageNov/hombreR.jpg`} alt="" width="100" height="60"/>
                                <img src={`/imageNov/ficciones.jpg` } alt="" width="100" height="60"/>
                                <img src={`/imageNov/nausea.jpg`} alt="" width="100" height="60"/>
                            </div> 

                                  
                    
                </div>
                ))}  */}

                



            

            </div>

                <div className="contenedor-circ  pb-4 flex justify-center mx-auto gap-1">
                     {Array.from({length:3}).map((item, index) => 

                    ( <div 
                        onClick={() => moveDot(index + 1)}
                        className={novIndex === index + 1 ? "circ w-5 h-5 rounded-full border-2 border-solid border-white mx-1 my-0 bg-gray-900 " : "circ w-5 h-5 rounded-full border-2 border-solid border-white mx-1 my-0 bg-white"}>

                    </div>))}
                 </div>

                
         </div>

            )}
    


export default Novedades
