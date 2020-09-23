import React from 'react';
import './nav-bar.styles.css'

import ProfileImg from '../profile-img/profile-img.component';
import { Link } from 'react-router-dom';


const NavBar = () => (
    <section id="nav-bar">
        <nav className="nav-bar">
            <div className='description-container'>
                <ProfileImg />
                <h1 className='name-header'>Eduardo Arevalo</h1>
                <h3 className='description-header'>Software Developer</h3>
            </div>
            <div className='navigation'>
                <ul className="navigation-list">
                    <li className="nav-list-element">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-list-element">
                        <Link className="nav-link" to="/portfolio">Portafolio</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </section>
);

export default NavBar;