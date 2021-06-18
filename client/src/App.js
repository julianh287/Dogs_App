import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Landing from './components/landing/Landing.jsx';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Cards from './components/cards/Cards';
import RazaDetail from './components/razaDetail/razaDetails';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Navbar} />
      <Route path="/home" component={Sidebar} />
      <Route path="/home" component={Cards} />

      {/* <Route path='/home/details' component={RazaDetail} />
      <Route path='/home/form' component={Form} />
      <Route path='/home/about' component={About} />
      <Route path='/home/favourites' component={Favoritas} /> */}      
    </div>
  );
}

export default App;
