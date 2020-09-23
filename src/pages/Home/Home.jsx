import React  from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => (
    <div className='main-container'>
        <div className='main-continer-layer'>
            <div className='main-container-content'>
                <h1>Hola, me llamo Eduardo!</h1>
                <small className="nickname">(pero los que me conocen me llaman Edu<span role="img" aria-label="smile">&#128516;</span>)</small>
                <h2>
                    Soy un desarrollador de software
                    tanto en backend como frontend
                </h2>
                <h3>
                    Me especializo en el desarrollo de software con tecnologias .NET,
                    y tecnologias web como HTML, CSS y Javascript
                </h3>
                <div>
                    <Link to="/portfolio" className="btn">Portafolio</Link>
                    <a href="" className="btn">Sobre Mi</a>
                </div>
            </div>
        </div>
    </div>
);

export default Home;