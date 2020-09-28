import React from 'react';
import { Switch, Link } from 'react-router-dom';
import BlogNavBar from '../../components/blog-nav-bar/blog-nav-bar'

import './bloglayout.styles.css'

const BlogLayout = (props) => (
    <div id="blog">
        <header>
            <BlogNavBar>
                <Link className="nav-link" to="/">Home</Link>
                <div>aqui va a ir algo</div>
            </BlogNavBar>
        </header>
        <main>
            <Switch>
                {props.children}
            </Switch>
        </main>
    </div>
);

export default BlogLayout;