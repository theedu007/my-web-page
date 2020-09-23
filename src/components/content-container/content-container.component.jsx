import React from 'react';

import './content-container.styles.css';

const ContenContainer = props => (
    <div className="container">
        <div className="container-content">
            {props.children}
        </div>
    </div>
);

export default ContenContainer;