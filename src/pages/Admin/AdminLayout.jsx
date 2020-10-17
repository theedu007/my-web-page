import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import BlogNavBar from '../../components/blog-nav-bar/blog-nav-bar';
import { isUserLogged } from '../../services/authService';

import './AdminLayout.styles.css';

class AdminLayout extends Component {
    constructor(props) {
        super()
        this.state = {
            isUserLogged: isUserLogged()
        }
    }

    render() {
        const { isUserLogged } = this.state;
        const { children } = this.props;
        return(
            <div id="blog">
                <BlogNavBar>
                    { isUserLogged ?
                        (   
                            <React.Fragment>
                                <Link to="/admin/post/create-post" className="nav-link nav-spacing">Crear Post</Link>
                                <Link to="/admin/tag/create-tag" className="nav-link nav-spacing">Crear Tag</Link>
                                <Link to="/admin/categories/create-category" className="nav-link nav-spacing">Crear Categoria</Link>
                                <Link to="/admin" className="nav-link nav-spacing">Home</Link>
                            </React.Fragment>
                        )
                        : null
                    }
                </BlogNavBar>
                <main>
                    <Switch>
                        {React.cloneElement(children, { ...this.props, ...this.state, handleLoggedState: this.handleLoggedState } )}
                    </Switch>
                </main>
            </div>
        );
    }
};

export default AdminLayout;