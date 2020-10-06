import React from 'react';

import './spinner.styles.css'

const Spinner = ({ isLoading }) => (
    isLoading ? 
    <div className="spinner-parent">
        <div className="spinner">
        </div>
    </div> : 
    null 
);

export default Spinner;