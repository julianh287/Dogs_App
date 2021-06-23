import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Landing from './components/landing/Landing.jsx';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Cards from './components/cards/Cards';
import RazaDetail from './components/razaDetail/RazaDetails';
import Form from './components/form/Form';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Cards} />
      <Route exact path="/home/details/:id" component={Navbar} />
      <Route exact path="/home/details/:id" component={Sidebar} />
      <Route path='/home/details/:id' component={RazaDetail} />
      <Route path='/home/form' component={Form} />
      <Route path='/home/form' component={Navbar} />
      <Route path='/home/form' component={Sidebar} />
      <Route path='/home/about' component={Navbar} />
      <Route path='/home/about' component={Sidebar} />
      <Route path='/home/about' component={About} />
    </div>
  );
}

export default App;
