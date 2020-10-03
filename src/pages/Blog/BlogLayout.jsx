import React from 'react';
import { Switch, Link } from 'react-router-dom';
import BlogNavBar from '../../components/blog-nav-bar/blog-nav-bar'

import './bloglayout.styles.css'

const BlogLayout = (props) => (
    <div id="blog">
        <BlogNavBar>
            <Link className="nav-link" to="/">Home</Link>
        </BlogNavBar>
        <main>
            <Switch>
                {props.children}
            </Switch>
        </main>
        <footer>
            <p>Aqui va el footer</p>
        </footer>
    </div>
);

export default BlogLayout;