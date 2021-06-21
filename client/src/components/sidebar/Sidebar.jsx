import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllTemperaments} from '../../actions/index';
import './Sidebar.css';

function Sidebar({getAllTemperaments, tempsLoaded}) {

  useEffect(() => { 
    const bringTemps = () => {
      getAllTemperaments()
    }
    bringTemps()
  }, []);
  
  return (
    <div className='Side'>
      {/* ORDENADO */}
      <div>
        <h3>Ordenar por:</h3>
        <p>
          <span>Nombre: </span>
          <select name="OrderByName">
            <option> A-z </option>
            <option> Z-a </option>
          </select>
        </p>        

        <p>
          <span>Peso: </span>
          <select name="OrderByWeight">
            <option> Min-Max </option>
            <option> Max-Min </option>
          </select>
        </p>
      </div>
      {/* FILTRADO */}
      <div>
        <h3>Filtrar por:</h3>
        <p>
          <span>Temperamento: </span>
          <select name="FilterByTemperament">
            {tempsLoaded.map(el => {
              return (<option key={`${el.id}`} value={`${el.id}`}>{el.name} </option>)
            })}
          </select>
        </p>

        <p>
          <span>Raza: </span>
          <select name="FilterByRaza">
            <option> Existente </option>
            <option> Mis Razas </option>
          </select>
        </p>

      </div>      
    </div>
  );
};

function mapStateToProps(state) {
  return {
    tempsLoaded: state.tempsLoaded
  }
};  

function mapDispatchToProps(dispatch){
  return {
    getAllTemperaments: (temps) => dispatch(getAllTemperaments(temps))
  }
};

export default connect (mapStateToProps, mapDispatchToProps)(Sidebar);