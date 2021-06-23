import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';

function Card({id, name, image, temperament, temperaments}) {

  if(temperaments){
    var temperamentosDB = [];
    temperaments.map(el => {
      var name= el.name[0].toUpperCase()+el.name.slice(1);
      temperamentosDB.push(name+', ');
    });
  }

  return (
    <div className='card'>
      <Link to={`/home/details/${id}`}>
      <img src={image && image.url} alt='No se encontró imagen' className='picture'/>
      <p className='card-title'>{name}</p>
      </Link>
      <div className='card-body'>
      <span >Temperamentos: {temperament}</span>
      <span>{temperamentosDB} </span>   
      </div> 
    </div>
  );
};

export default Card;

