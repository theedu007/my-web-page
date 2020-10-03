import React from 'react';
import { Link, Switch } from 'react-router-dom';
import BlogNavBar from '../../components/blog-nav-bar/blog-nav-bar';
import { isUserLogged } from '../../services/authService';

import './AdminLayout.styles.css';

const AdminLayout = (props) => (
    <div id="blog">
        <BlogNavBar>
            { isUserLogged() ?
                (   
                    <React.Fragment>
                        <Link to="/admin/create-post" className="nav-link nav-spacing">Crear Post</Link>
                        <Link to="/admin" className="nav-link nav-spacing">Home</Link>
                    </React.Fragment>
                )
                : null
            }
        </BlogNavBar>
        <main>
            <Switch>
                {props.children}
            </Switch>
        </main>
    </div>
);

export default AdminLayout;