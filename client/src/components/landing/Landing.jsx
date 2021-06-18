import React from 'react';
import {Link} from 'react-router-dom';

function Landing() {
  return (
    <div>
      <h1>¡Bienvenido a De Perros!</h1>
      <p>El portal donde encontrarás toda la información de tus razas favoritas</p>
      <Link to='/home'>
        <button>¡Guauu!</button>
      </Link>
    </div>
  )
};

export default Landing;