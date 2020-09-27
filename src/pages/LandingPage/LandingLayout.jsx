import React from 'react';
import { Switch, Link } from 'react-router-dom';
import NavBar from '../../components/nav-bar/nav-bar.component';

import './LandingLayout.styles.css'

const LandingLayout = (props) => (
    <div className="App">
        <NavBar>
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/portfolio">Portafolio</Link>
            <Link className="nav-link" to="/blog">Blog</Link>
        </NavBar>
        <section id='content'>
            <Switch>
                {props.children}
            </Switch>
        </section>
    </div>
);

export default LandingLayout;