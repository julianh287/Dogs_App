import React from 'react';
import { connect } from 'react-redux';
import {getRaza} from '../../actions/index';
import {Link} from 'react-router-dom';
import Searchbar from '../searchbar/Searchbar';
import './Navbar.css';

function Navbar({getRaza}) {
  return (
    <nav className='Nav'>
      <div className='subNav'>
        {/* LINK A HOME */}
        <Link to='/home'>
          <span className='box' onClick={() => getRaza()} >Home</span>
        </Link>

        {/* LINK A CREAR UNA RAZA (FORM) */}
        <Link to='/home/form'>
          <span className='box'>Crear una raza</span>
        </Link>

        {/* LINK A MIS RAZAS */}
        {/* <Link to='/home/favoritas'>
          <span className='box'>Mis razas favoritas</span>
        </Link> */}

        {/* LINK A SOBRE NOSOTROS */}
        <Link to='/home/about'>
          <span className='box'>Acerca de este sitio</span>
        </Link>

        <Searchbar className='box'/>
      </div>
    </nav>
  );
};

export default connect(null, {getRaza})(Navbar);