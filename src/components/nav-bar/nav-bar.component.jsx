import React from 'react';
import './nav-bar.styles.css'

import ProfileImg from '../profile-img/profile-img.component';


const NavBar = () => (
    <nav className="nav-bar">
        <div className='description-container'>
            <ProfileImg />
            <h1 className='name-header'>Eduardo Arevalo</h1>
            <h3 className='description-header'>Software Developer</h3>
        </div>
        <div className='navigation'>
            
        </div>
    </nav>
);

export default NavBar;