import React from 'react';
import logo from '../assests/images/logoM.png';
import conf from '../assests/images/conf.png';


const Nav = () => {
    return ( 

        <div className="w-[1920px] xsm:w-full mx-auto">

    
      <nav className="flex justify-between  items-center">
          <div className="logo flex-initial p-2 w-1/6 lg:justify-start md:ml-36 ml-8">
              <img src={logo} width="100" alt=""/>
          </div>
          <div className="nav w-full md:w-1/2 lg:justify-start">
                 
              <input type="text" name="company-website" id="company-website" className="search" placeholder="Buscar título, autor, género"/>
                  <button className="boton w-1/6  bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 rounded text-white font-rale ml-2">Buscar</button>
          </div> 

          <div className="usuario justify-self-end  mr-20 md:block hidden">
              <a href="asd" className="iniciar_sesion  w-1/6   hover:underline focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 rounded  font-rale uppercase text-xs lg:text-base" >Iniciar sesión</a>
              <a href="asd" className="barra">/</a>
              <a href="asd" className="registrarse  w-1/6   hover:underline focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 rounded  font-rale uppercase text-xs lg:text-base">Registrarse</a>   
          </div>

          <div className="administrador mr-4">
             <img src={conf} width="16" alt=""/>
          </div>

      </nav> 
          <nav>
          <div className="links lg:block hidden w-5/6 ">
              <ul className="flex menu items-center justify-end ">
                  <li className="link w-28 text-center"><a className="a" href="asd" >Novedades</a></li>
                  <li className="link w-28 border-r-2 border-l-2 border-gray-200  text-center"><a href="asd" >Blog</a></li>
                  <li className="link w-28 text-center"><a className="a" href="asd">Academia</a></li>
                  <li className="link w-28 border-r-2 border-l-2 border-gray-200  text-center"><a href="asd">Agenda</a></li>
                  <li className="link w-28 text-center"><a  className="a" href="asd">Nosotros</a></li>
              </ul>
          </div>
      </nav>
    </div>


     );
}
 
export default Nav;

