import React from 'react';
import './blog-container.styles.css'

const BlogContainer = (props) => (
    <div className="blog-container">
        {props.children}
    </div>
);

export default BlogContainer;