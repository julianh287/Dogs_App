import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../actions/index';
import './RazaDetails.css';

function RazaDetail({match}) {

  var paramsID = match.params.id;

  const dispatch = useDispatch();
  const detalle = useSelector(state => state.razaDetail);

  useEffect( () => {
    const bringDetail = () => {
      dispatch(getDetails(paramsID))
    }
    bringDetail();
  }, [dispatch, paramsID]);

  // useEffect(() => { //useEffect en 2 pasos separados. 
  //   const bringDetail = () => {
  //     getDetails(match.params.id)//ejecuta la action, que hace el llamado a la api y BD
  //   }
  //   bringDetail()
  // }, [match.params.id, mapStateToProps, getDetails]);
  
  // useEffect(() => { 
  //   const renderDetail = () => {
  //     setDetalle(razaDetail[0]) // setea el estado local de detalle a lo que trajo la action a traves del store
  //   } 
  //   renderDetail()
  // }, [razaDetail]);

  // if(detalle[0].temperaments){
  //   var temperamentosDB = [];
  //   detalle.temperaments.map(el => {
  //     var name= el.name[0].toUpperCase()+el.name.slice(1);
  //     temperamentosDB.push(name+', ');
  //   });
  // };

  if (!detalle[0]) return (<p>Loading...</p>);
  
  return (
    <div className='detail'>

       <img src={detalle[0].image && detalle[0].image.url} alt='No se encontró imagen' className='detailPic'/>

      <h2 className='detail-title'>{detalle[0].name}</h2>

      
      <div>
      {detalle[0].height && detalle[0].height.metric && (<p className='detail-body'>Altura: {detalle[0].height.metric}</p>)}
      </div>

      <div>
      {detalle[0].weight && detalle[0].weight.metric && (<p className='detail-body'>Peso: {detalle[0].weight.metric}</p>)}
      </div>

      <div>
      {detalle[0].life_span && (<p className='detail-body'>Expectativa de vida: {detalle[0].life_span}</p>)}
      </div>

      <div>
      {detalle[0].lifeExpectancy && (<p className='detail-body'>Expectativa de vida: {detalle[0].lifeExpectancy}</p>)}
      </div>

      <div>
      {detalle[0].temperament && (<p className='detail-body'>Temperamentos: {detalle[0].temperament}</p>)}
      </div>

      <div>
      {detalle[0].temperamentosDB && (<p className='detail-body'>Temperamentos: {detalle[0].temperamentosDB} </p>)}
      </div>
    </div>
  );
};

// function mapStateToProps(state) {
//   return {
//     razaDetail: state.razaDetail,
//   }
// };

export default RazaDetail;
// export default connect(mapStateToProps, {getDetails})(RazaDetail);
