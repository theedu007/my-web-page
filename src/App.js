import React from 'react';
import './App.css';

import NavBar from './components/nav-bar/nav-bar.component'

import MainPage from './pages/MainPage/MainPage'

function App() {
  return (
    <div className="App">
      <section id='nav-bar'>
        <NavBar />
      </section>
      <section id='content'>
        <MainPage />
      </section>
    </div>
  );
}

export default App;
