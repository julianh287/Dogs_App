import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getRaza} from '../../actions/index';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import './Cards.css';

function Cards({razasLoaded, getRaza}) {

  const [razas, setRazas] = useState([]); 
  
  useEffect(() => { //useEffect en 2 pasos separados.
    const bringRazas = () => {
      setLoading(true)
      getRaza() //ejecuta la action getRaza, que hace el llamado a la api y BD
    }
    bringRazas()
  }, []);
  
  useEffect(() => { 
    const renderRazas = () => {
      setRazas(razasLoaded) // setea el estado local de razas a lo que trajo la action
      setLoading(false)
    } 
    renderRazas()
  }, [razasLoaded]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(8);

  const indexOfLastCard = currentPage * cardsPerPage; //1*8=8, 2*8=16
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;//8-8=0, 16-8=8
  var currentCards = razas.slice(indexOfFirstCard, indexOfLastCard);//muestra las

  const paginate = (event) => {
    setCurrentPage(Number(event.target.id)); //setea currentPage en el numero que se clickea
 };

  if(loading){
    return (<h2>Loading...</h2>)
  }; 
  if(currentCards.length===0){
        return (<h1>No se encontraron resultados...</h1>)
      }

  return (
    <div className='cardsContainer'>      
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
      <Pagination cardsPerPage={cardsPerPage} numberOfCards={razas.length} paginate={paginate} />
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

    //===========================================================================

//    const [razas, setRazas] = useState([]);
//    const [loading, setLoading] = useState(false);
//    const [currentPage, setCurrentPage] = useState(1);
//    const [cardsPerPage, setCardsPerPage] = useState(8);

//    useEffect(() => {
//       const fetchPosts = async () => {
//         setLoading(true);
//         const res = await axios.get (API)//esta es mi action
//         setRazas(res.data);
//         setLoading(false);
//       }

//       fetchPosts()
//    }, []);

// // crea un componente Posts. sería mi Cards
// // recibe loading y posts como props. Serían mis cards.
// <Post posts={currentPosts} loading={loading}/>
// <Pagination postPerPage={PostPerPage} totalPosts={posts.length}/>

// const indexOfLastPost = currentPage * PostPerPage;
// const indexOfFirstPost = indexOfLastPost - PostPerPage;
// const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost)
