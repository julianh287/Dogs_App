import React from 'react';
import {Link} from 'react-router-dom';
import './Landing.css'

function Landing() {
  return (
    <div className='landing'>
      <h1 className='lanTitle'>¡Bienvenido a De Perros!</h1>
      <p>El portal donde encontrarás toda la información de tus razas favoritas</p>
      <Link to='/home'>
        <button className='lanButton'>¡Guauu!</button>
      </Link>
    </div>
  )
};

export default Landing;