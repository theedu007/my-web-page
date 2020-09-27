import React from 'react';
import './nav-bar.styles.css'

import ProfileImg from '../profile-img/profile-img.component';
import NavBarLink from '../nav-bar-link/nav-bar-link.component'

const NavBar = ({ children }) => (
    <section id="nav-bar">
        <nav className="nav-bar">
            <div className='description-container'>
                <ProfileImg />
                <h1 className='name-header'>Eduardo Arevalo</h1>
                <h3 className='description-header'>Software Developer</h3>
            </div>
            <div className='navigation'>
                <ul className="navigation-list">
                    { children.map(child => <NavBarLink routerLink={ child }/>) }
                </ul>
            </div>
        </nav>
    </section>
);

export default NavBar;