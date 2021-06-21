import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Landing from './components/landing/Landing.jsx';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Cards from './components/cards/Cards';
import RazaDetail from './components/razaDetail/RazaDetails';
import Form from './components/form/Form';
import Favoritas from './components/favoritas/Favoritas';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Navbar} />
      <Route path="/home" component={Sidebar} />
      <Route exact path="/home" component={Cards} />
      <Route path='/home/details/:id' component={RazaDetail} />
      <Route path='/home/form' component={Form} />
      {/* <Route path='/home/favourites' component={Favoritas} />      */}
      <Route path='/home/about' component={About} />
    </div>
  );
}

export default App;
