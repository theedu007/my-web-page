import React from 'react';
import './blog-nav-item.css'

const BlogNavBarLink = ({ routerLink }) => (
    <li className="blog-nav-item">
        {routerLink}
    </li>
);

export default BlogNavBarLink;