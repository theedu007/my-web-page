import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/nav-bar/nav-bar.component'

import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id='content'>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/portfolio" component= { Portfolio } />
        </Switch>
      </section>
    </div>
  );
}

export default App;
