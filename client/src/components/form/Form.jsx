import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import {createRaza, getAllTemperaments} from '../../actions/index';
import './Form.css';

function validate (input){
  let errores = {
    name:"",
    minheight:"",
    maxheight:"",
    diffheight:"",
    minweight:"",
    maxweight:"",
    diffweight:"",
    temperament:""
  };
  if(!input.name){
    errores.name = 'Debes ingresar un nombre de raza'
  };
  if(!input.minheight){
    errores.minheight = "Debes ingresar una altura mínima"
  } else if (!input.maxheight){
    errores.maxheight = "Debes ingresar una altura máxima"
  } else if (input.minheight && input.maxheight && input.minheight > input.maxheight){
    errores.diffheight = "La altura mínima no puede ser mayor que la máxima"
  };
  if(!input.minweight){
    errores.minweight = "Debes ingresar un peso mínimo"
  } else if (!input.maxweight){
    errores.maxweight = "Debes ingresar un peso máximo"
  } else if (input.minweight && input.maxweight && input.minweight > input.maxweight){
    errores.diffweight = "El peso mínimo no puede ser mayor que el máximo"
  };
  if(!input.temperament1 || !input.temperament2 || !input.temperament3){
    errores.temperament = "Debes ingresar 3 temperamentos para esta raza"
  } else if (input.temperament1 === input.temperament2 || input.temperament1 === input.temperament3 || input.temperament2 === input.temperament3){
    errores.temperament = "Deben ser 3 temperamentos distintos"
  }
  return errores;
};

function Form({createRaza, tempsLoaded, getAllTemperaments}) {

  useEffect(() => { 
    const bringTemps = () => {
      getAllTemperaments()
    }
    bringTemps()
  }, []);
  
  const [errors, setErrors] = useState ({
    name:"",
    minheight:"",
    maxheight:"",
    minweight:"",
    maxweight:"",
    lifeExpectancy:"",
    temperament:""
  });
  const [input, setInput] = useState({
    name:"",
    minheight:"",
    maxheight:"",
    minweight:"",
    maxweight:"",
    lifeExpectancy:"",
    temperament1:"", 
    temperament2:"",
    temperament3:""
  });
  
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]:e.target.value,
    })
    setErrors(validate({
      ...input,
      [e.target.name]:e.target.value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let mensajeBody = {
    name: input.name,
    height:`${input.minheight} - ${input.maxheight}`,
    weight:`${input.minweight} - ${input.maxweight}`,
    lifeExpectancy:`${input.lifeExpectancy}`,
    temperament:[input.temperament1, input.temperament2, input.temperament3]
    }
    await createRaza(mensajeBody);
    alert('La raza se creó correctamente');
  };

  return (
    <div className='form'>
      <h1>Formulario de creación de raza</h1>
      <p>En esta sección podrás crear una nueva raza de perro.
        Para eso se te pedirá que brindes ciertos datos necesarios para crear la raza.
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ul className='FormList'>
          <li>
          <label>Nombre de la raza: </label>
        <input name="name" type='text' onChange={(e) => handleChange(e)} value={input.name} className={errors.name && "danger"} ></input>
                 
        {errors.name && (<span className="danger">{errors.name} </span>)}
        
          </li>

          <li>
          <label>Altura en cm: Min</label> 
        <input name="minheight" type='number' onChange={(e) => handleChange(e)} value={input.minheight} className={errors.minheight && "danger"} ></input>

          <label> Max </label> 
        <input name="maxheight" type='number' onChange={(e) => handleChange(e)} value={input.maxheight} className={errors.maxheight && "danger"} ></input>

        {errors.minheight && (<span className="danger">{errors.minheight} </span>)}

        {errors.maxheight && (<span className="danger">{errors.maxheight} </span>)}

        {errors.diffheight && (<span className="danger">{errors.diffheight} </span>)}

          </li>        

          <li>
          <label>Peso en kg: Min</label>
        <input name="minweight" type='number' onChange={(e) => handleChange(e)} value={input.minweight} className={errors.minweight && "danger"} ></input>

          <label> Max </label>
        <input name="maxweight" type='number' onChange={(e) => handleChange(e)} value={input.maxweight} className={errors.maxweight && "danger"} ></input>

        {errors.minweight && (<span className="danger">{errors.minweight} </span>)}

        {errors.maxweight && (<span className="danger">{errors.maxweight} </span>)}

        {errors.diffweight && (<span className="danger">{errors.diffweight} </span>)}

          </li>

          <li>
          <label>Espectativa de vida: </label>
        <input name="lifeExpectancy" type='number' onChange={(e) => handleChange(e)} value={input.lifeExpectancy} className={errors.lifeExpectancy && "danger"} ></input>
          <label> años </label>
          </li>

          <li>
          <label>Temperamento: </label>
        <select name="temperament1" id='temps' onChange={(e) => handleChange(e)}>
          {tempsLoaded.map(el => {
            return (<option key={`${el.id}`} value={`${el.id}`}>{el.name} </option>)
          })}
        </select>
        <select name="temperament2" id='temps' onChange={(e) => handleChange(e)}>
          {tempsLoaded.map(el => {
            return (<option key={`${el.id}`} value={`${el.id}`}>{el.name} </option>)
          })}
        </select>
        <select name="temperament3" id='temps' onChange={(e) => handleChange(e)}>
          {tempsLoaded.map(el => {
            return (<option key={`${el.id}`} value={`${el.id}`}>{el.name} </option>)
          })}
        </select>

        {errors.temperament && (<span className="danger">{errors.temperament} </span>)}

          </li>

        </ul>

        {/* BOTON DE CREAR RAZA */}
        {!errors.name && !errors.temperament && !errors.diffweight && !errors.maxweight && !errors.minweight && !errors.diffheight && !errors.minheight && !errors.maxheight && (<button className='FormButton' type="submit">Crear</button>)}

      </form>
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
    createRaza: (post) => dispatch(createRaza(post)),
    getAllTemperaments: (temps) => dispatch(getAllTemperaments(temps))
  }
};

export default connect (mapStateToProps, mapDispatchToProps)(Form);

// OPCION 1: que mapee las opciones seleccionadas/checkeadas y pushee los ids al array del body.
// OPCION 2: boton que pushee el id del temperamento al array, y que onSubmit envie todo como siempre
// useEffect(() => {
//   if (Types.length) {
//     let total = pokemonsTypes.reduce((acc, el) => {
//       if (Types.includes(el.name) === true) {
//         acc.push(el.id);
//       }
//       return acc;
//     }, []);
//     setData({...Data, type: total});
//   }
// }, [Types]);

// const handleTypes = (e) => {
//   if (Types.length < 2) {
//     if (!Types.includes(e.target.value)) {
//       setTypes([...Types, e.target.value]);
//     }
//   } else setTypes([e.target.value]);
// };