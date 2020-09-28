import React from 'react';
import { Link } from 'react-router-dom';
import BlogNavBarLink from '../blog-nav-item/blog-nav-item.component'

import './blog-nav-bar.styles.css'

const BlogNavBar = ({ children }) => (
    <header className="blog-header">
        <div>
            <Link to='/blog' className="nav-link">
                Blog
            </Link>
        </div>
        <nav className="blog-nav">
            <ul className="blog-nav-items">
            { children.map((item, index) => <BlogNavBarLink key={index} routerLink={item} />) }
            </ul>
        </nav>
    </header>
);

export default BlogNavBar;