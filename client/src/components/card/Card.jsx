import React from 'react';
import './Card.css';

function Card({name, image, temperament, temperaments}) {

  if(temperaments){
    var temperamentosDB = [];
    temperaments.map(el => {
      var name= el.name[0].toUpperCase()+el.name.slice(1);
      temperamentosDB.push(name+', ');
    });
  }

  return (
    <div className='card'>
      <img src={image && image.url} alt='No se encontró imagen' className='picture'/>
      <p className='card-title'>{name}</p>
      <span className='card-body'>Temperamentos: {temperament}</span>
      <span className='card-body'>{temperamentosDB} </span>   
    </div>
  );
};

export default Card;