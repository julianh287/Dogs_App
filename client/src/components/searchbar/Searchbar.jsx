import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getRaza} from '../../actions/index';
import './Searchbar.css';

function Searchbar({getRaza, razasLoaded}) {

  const [input, setInput] = useState('');
  
  const handleChange = (e) => {
    setInput(e.target.value)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    getRaza(input);
    setInput('');
  };

  return (
    <form className='Searchbar' onSubmit={(e) => handleSubmit(e)} >
      <input className='InputBar' name="searchBar" type='text' onChange={(e) => handleChange(e)} value={input} ></input>
      <button className='SearchButton' type="submit">Buscar</button>
    </form>
  );
};

function mapStateToProps(state) {
  return {
    razasLoaded: state.razasLoaded,
  }
};
export default connect(mapStateToProps, {getRaza})(Searchbar);