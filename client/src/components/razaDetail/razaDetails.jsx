import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getDetails } from '../../actions/index';
import './RazaDetails.css';

function RazaDetail({razaDetail, getDetails, match}) {

  const [detalle, setDetalle] = useState({}); 
  
  useEffect(() => { //useEffect en 2 pasos separados.
    const bringDetail = () => {
      getDetails(match.params.id) //ejecuta la action, que hace el llamado a la api y BD
    }
    bringDetail()
  }, []);
  
  useEffect(() => { 
    const renderDetail = () => {
      setDetalle(razaDetail) // setea el estado local de detalle a lo que trajo la action a traves del store
    } 
    renderDetail()
  }, [razaDetail]);

  if(detalle.temperaments){
    var temperamentosDB = [];
    detalle.temperaments.map(el => {
      var name= el.name[0].toUpperCase()+el.name.slice(1);
      temperamentosDB.push(name+', ');
    });
  };

  return (
    <div className='detail'>

      <img src={detalle.image && detalle.image.url} alt='No se encontró imagen' className='detailPic'/>

      <h2 className='detail-title'>{detalle.name}</h2>

      {detalle.height && (<span className='detail-body'>Altura: {detalle.height}</span>)}

      {detalle.weight && (<span className='detail-body'>Peso: {detalle.weight}</span>)}

      {detalle.life_span && (<p className='detail-body'>Expectativa de vida: {detalle.life_span}</p>)}

      {detalle.lifeExpectancy && (<p className='detail-body'>Expectativa de vida: {detalle.lifeExpectancy}</p>)}

      {detalle.temperament && (<p className='detail-body'>Temperamentos: {detalle.temperament}</p>)}

      {detalle.temperamentosDB && (<p className='detail-body'>Temperamentos: {detalle.temperamentosDB} </p>)}

    </div>
  );
};

function mapStateToProps(state) {
  return {
    razaDetail: state.razaDetail[0],
  }
};

export default connect(mapStateToProps, {getDetails})(RazaDetail);

// "weight": {
//   "imperial": "6 - 13",
//   "metric": "3 - 6"
// },
// "height": {
//   "imperial": "9 - 11.5",
//   "metric": "23 - 29"