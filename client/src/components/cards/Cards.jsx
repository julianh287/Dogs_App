import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../card/Card';
import { connect } from 'react-redux';
import {getRaza} from '../../actions/index';
import './Cards.css';
import axios from 'axios';

function Cards({razasLoaded, getRaza}) {

  const [razas, setRazas] = useState([]); // versión con un solo useEffect
  useEffect(() => { //otra version del useEffect en 2 pasos separados.
    const renderRazas = () => { setRazas(razasLoaded) } 
    renderRazas()
  }, [razasLoaded]);
  
  useEffect(() => {
    const updateRazas = () => {
      getRaza()
    }
    updateRazas()
  }, []);

  return (
    <div className='cardsContainer'>
      {razas.map((raza) => {
        return (
          <Card
            key={raza.id}
            name={raza.name}
            image={raza.image}
            temperament={raza.temperament}
            temperaments={raza.temperaments}
          />
          // <div>
          //   <p>{raza.name}</p>
          //   <img src={raza.image && raza.image.url} alt='No se encontró imagen'/>
          // </div>
        )
      })}
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

  //  const [razas, setRazas] = useState([]);
  //  const [loading, setLoading] = useState(false);
  //  const [currentPage, setCurrentPage] = useState(1);
  //  const [cardsPerPage, setCardsPerPage] = useState(8);

  //  useEffect(() => {
  //     const fetchPosts = async () => {
  //       setLoading(true);
  //       const res = await axios.get (API)//esta es mi action
  //       setRazas(res.data);
  //       setLoading(false);
  //     }

  //     fetchPosts()
  //  }, []);

// crea un componente Posts. sería mi Cards
// recibe loading y posts como props. Serían mis cards.
{/* <Post posts={currentPosts} loading={loading}/>
<Pagination postPerPage={PostPerPage} totalPosts={posts.length}/>

const indexOfLastPost = currentPage * PostPerPage;
const indexOfFirstPost = indexOfLastPost - PostPerPage;
const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost) */}
