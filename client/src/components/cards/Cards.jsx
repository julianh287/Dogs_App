import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getRaza} from '../../actions/index';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import './Cards.css';

function Cards({razasLoaded, getRaza}) {

  const [razas, setRazas] = useState([]); 
  
  useEffect(() => { //useEffect en 2 pasos separados.
    const bringRazas = () => {
      getRaza() //ejecuta la action getRaza, que hace el llamado a la api y BD
    }
    bringRazas()
  }, []);
  
  useEffect(() => { 
    const renderRazas = () => {
      setRazas(razasLoaded) // setea el estado local de razas a lo que trajo la action
    } 
    renderRazas()
  }, [razasLoaded]);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(8);

  const indexOfLastCard = currentPage * cardsPerPage; //1*8=8, 2*8=16
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;//8-8=0, 16-8=8

  var currentCards = razas.slice(indexOfFirstCard, indexOfLastCard);//muestra las cards segun los numeros que obtengan las dos variables de arriba (siempre la diferencia va a ser 8).

  const paginate = (event) => {
    setCurrentPage(Number(event.target.id)); //setea currentPage en el numero que se clickea
 };

  if(currentCards.length===0){
        return (<h1>Loading...</h1>)
      }

  return (
    <div className='cardsContainer'>  
      <div className='div_Navbar'>
        <Navbar />
      </div> 
      <div className='div_Sidebar'>
        <Sidebar razas={razas} setRazas={setRazas}/>   
      </div> 
      <div className='div_Cards'>
        {currentCards.map((raza) => {
          return (
            <Card
              key={raza.id}
              id={raza.id}
              name={raza.name}
              image={raza.image}
              temperament={raza.temperament}
              temperaments={raza.temperaments}
            />
          )
        })}
      </div> 
      <div className='div_Pagination'>
        <Pagination cardsPerPage={cardsPerPage} numberOfCards={razas.length} paginate={paginate} />
      </div>

    </div>
  );
};

function mapStateToProps(state) {
  return {
    razasLoaded: state.razasLoaded,
  }
};
export default connect(mapStateToProps, {getRaza})(Cards);

//=======================================================================
//   useEffect(() => { //otra version del useEffect en 2 pasos separados.
//     const renderRazas = () => { setRazas(razasLoaded) } 
//     renderRazas()
// }, [razasLoaded]);

//   useEffect(() => {
//     const updateRazas = () => {
//       getRaza()
//     }
//     updateRazas()
//   }, []);

//============================================================================

// const [razas, setRazas] = useState([]); // versión con un solo useEffect
  // useEffect(() => {
  //   const updateRazas = () => {
  //     getRaza();
  //     setRazas(razasLoaded);
  //   }
  //   updateRazas()
  // }, [razasLoaded]);

  //===========================================================================

  // useEffect(()=> { //forma 3. sin estado local. accede directo al Store. Esta bien?
  //   getRaza();
  // }, []);
