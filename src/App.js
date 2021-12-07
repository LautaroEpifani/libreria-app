import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Administrador from './components/Administrador/Administrador';
import Nav from './components/Nav';
import Novedades from './components/Novedades';
import Slider from './components/Slider/Slider';


function App() {
  return (
    <Fragment>

      <Nav/>

      <Slider/>

      <Novedades/>

      <Administrador/>

    </Fragment>


  );
}

export default App;

