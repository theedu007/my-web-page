import React from 'react';

import './tecnologies-tags.styles.css'

const TechTag = ({ tagContent, clickHandle, tagId }) => (
    <span className="tech-tag">{tagContent}{clickHandle ? <button className="btn-delete" onClick={(event) => clickHandle(event, tagId)}>X</button> : null }</span>
);

export default TechTag;