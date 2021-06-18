import React from 'react';
import {Link} from 'react-router-dom';
import Searchbar from '../searchbar/Searchbar';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='Nav'>
      <div className='subNav'>
        {/* LINK A HOME */}
        <Link to='/'>
          <span className='box'>Home</span>
        </Link>

        {/* LINK A CREAR UNA RAZA (FORM) */}
        <Link to='/form'>
          <span className='box'>Crear una raza</span>
        </Link>

        {/* LINK A MIS RAZAS */}
        <Link to='/favoritas'>
          <span className='box'>Mis razas favoritas</span>
        </Link>

        {/* LINK A SOBRE NOSOTROS */}
        <Link to='/about'>
          <span className='box'>Sobre nosotros</span>
        </Link>

        <Searchbar className='box'/>
      </div>
    </nav>
  );
};

export default Navbar;