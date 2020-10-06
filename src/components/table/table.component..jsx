import React from 'react';

import './table.styles.css';

const Table = ({ headers, data, tableBodyFuction }) => (
    <div className="table-container">
        <table className="table">
            <thead>
                <tr>
                    {headers.map((header, index) => <th key={index} id={index}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map(tableBodyFuction)}
            </tbody>
        </table>
    </div>
);

export default Table;