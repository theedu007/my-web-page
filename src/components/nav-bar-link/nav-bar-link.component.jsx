import React from 'react';

import './nav-bar-link.styles.css';

const NavBarLink = ({ routerLink }) => (
    <li className="nav-list-element">
        { routerLink }
    </li>
);

export default NavBarLink;