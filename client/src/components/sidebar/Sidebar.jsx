import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllTemperaments, reloadRaza } from '../../actions/index';
import './Sidebar.css';

function Sidebar({getAllTemperaments, tempsLoaded, razas, setRazas, reloadRaza}) {

  useEffect(() => { 
    const bringTemps = () => {
      getAllTemperaments()
    }
    bringTemps()
  }, [getAllTemperaments]);

  const filterRaza = (selection) => {
    switch (selection) {
      case 'A-Z': // Si a > b debe devolver positivo : negativo
        return setRazas([...razas].sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else {
            return -1;
          }
        }));
      case 'Z-A':
        return setRazas([...razas].sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          } else {
            return -1;
          }
        }));
      default: return setRazas([...razas]);
  }
};

const filterPeso = (selection) => {
  switch (selection) {
    case 'Min-Max': // Si a > b debe devolver positivo : negativo
      return setRazas([...razas].sort((a, b) => {
        if(a.weight.metric) {
          let weights = a.weight.metric.split(' - ')
          var amin = Number(weights[0])
          if(weights[1]) amin = (Number(weights[1]) + Number(weights[0])) / 2
      }
      else if(!a.weight.metric) amin = a.weight.metric
      if(b.weight.metric) {
          let weights = b.weight.metric.split(' - ')
          var bmin = Number(weights[0])
          if(weights[1]) bmin = (Number(weights[1]) + Number(weights[0])) / 2
      }
         else if(!b.weight.metric) bmin = b.weight.metric
            return amin - bmin
      }));
    case 'Max-Min':
      return setRazas([...razas].sort((a, b) => {
        if(a.weight.metric) {
          let weights = a.weight.metric.split(' - ')
          var amin = Number(weights[0])
          if(weights[1]) amin = (Number(weights[1]) + Number(weights[0])) / 2
      }
      else if(!a.weight.metric) amin = a.weight.metric
      if(b.weight.metric) {
          let weights = b.weight.metric.split(' - ')
          var bmin = Number(weights[0])
          if(weights[1]) bmin = (Number(weights[1]) + Number(weights[0])) / 2
      }
         else if(!b.weight.metric) bmin = b.weight.metric
            return bmin - amin
      }));
    default: return setRazas([...razas]);
  }
};

const filterCreated = (selection) => {
  let reg_ex = /-/;
  switch(selection){
    case 'Mis Razas':
      return setRazas(razas.filter((el) => el.id.toString().search(reg_ex) !== -1));
    case 'Existente':
      return setRazas(razas.filter((el) => el.id.toString().search(reg_ex) === -1));
    default: return setRazas(razas);
  }
};

// const [selection, setSelection] = useState({});

// const handleChange = (e) => {
//   console.log(selection)
//   setSelection({
//     ...selection,
//     [e.target.name]: e.target.value
//   })
// };
  // const ALLINFO = razas?.map(el => {
  //   return {image: el.image.url,
  //   nombre: el.name,
  //   temperament: el?.temperament?.split(', ')
  //   }
  // });
  // console.log(ALLINFO);

  /////////////////////////////////////////////////
  
  // const ABC = function () {
  //   let RenderArray = [];    
  //   razas?.map((x) => {
  //     var arrayTemp = x.temperament;
  //     if (arrayTemp) {
  //       arrayTemp = arrayTemp?.split(",");
  //       arrayTemp = arrayTemp?.map(el=> el.trim().toLowerCase());
  //     }      
  //     RenderArray.push({
  //       id: x?.id,
  //       name: x?.name?.toLowerCase(),
  //       weight: x?.weight?.metric,
  //       height: x?.height?.metric,
  //       lifeExpectancy: x?.life_span,
  //       image: {
  //         url:x?.image?.url
  //       },
  //       temperament: arrayTemp,
  //     });
  //   });
  //   return RenderArray;
  // };
  
  // const ALLINFO = ABC();
  /////////////////////////////////////////////////////////////
  
  
  
  // const filterTemperament = (temps) => {
  
  //     console.log(ALLINFO);
  //     const FilteredInfo = ALLINFO?.filter( el => el?.temperament?.includes(`${temps}` || ` ${temps}`))
  //     console.log(FilteredInfo);
  //     Setrazas(filteredInfo)
      // reloadRaza(FilteredInfo);    
  // };

// que pise el estado: setRazas(ABC)
// que pise el estado DE REDUX: razasLoaded con una action nueva
// crear un nuevo estado de redux 



  // (razas.map(el => el.temperament.split(',').find(temps))).includes(temps)
  
  // var TempValue = document.getElementById('tempSelected')
  // console.log(TempValue.value);

  return (
    <div className='Side'>

      {/* ORDENADO */}

      <div>
        <h3>Ordenar por:</h3>
        <div>
          <span>Nombre: </span>
          <button onClick={(e) => { e.preventDefault(); filterRaza('A-Z') }}>A-Z</button>
          <button onClick={(e) => { e.preventDefault(); filterRaza('Z-A') }}>Z-A</button>    
        </div>  

        <div>
          <span>Peso: </span>
          <button onClick={(e) => { e.preventDefault(); filterPeso('Min-Max') }}>Min-Max</button>
          <button onClick={(e) => { e.preventDefault(); filterPeso('Max-Min') }}>Max-Min</button>
        </div>

      </div>

      {/* FILTRADO */}

      <div>
        <h3>Filtrar por:</h3>
        <div >
          <span>Temperamento: </span>
          <select id='tempSelect'>
            {tempsLoaded.map(el => {
              return (<option key={el.id} value={el.name}>{el.name} </option>)// 'loyal'
            })}
          </select>
          <button >Filtrar</button> 
          {/* onClick={(e) => { e.preventDefault(); filterTemperament(document.getElementById('tempSelect').value) }} */}
          
        </div>

        <div>
          <span>Raza: </span>
          <button onClick={(e) => { e.preventDefault(); filterCreated('Existente') }}>Existente</button>
          <button onClick={(e) => { e.preventDefault(); filterCreated('Mis Razas') }}>Mis Razas</button>         
        </div>

      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    tempsLoaded: state.tempsLoaded,
  }
};  

function mapDispatchToProps(dispatch){
  return {
    getAllTemperaments: (temps) => dispatch(getAllTemperaments(temps)),
    reloadRaza: (razas) => dispatch(reloadRaza(razas)),
  }
};

export default connect (mapStateToProps, mapDispatchToProps)(Sidebar);


// countries: state.countries.filter((c)=>{ return c.activities.some((a)=> a.name === action.payload)

