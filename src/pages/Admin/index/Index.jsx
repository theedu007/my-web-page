import React, { Component } from 'react';
import BlogContainer from '../../../components/blog-container/blog-container.component';
import { Redirect } from 'react-router-dom';
import { isUserLogged } from '../../../services/authService';

class Index extends Component{
    constructor(props) {
        super();
    }

    render() {
        return(
            !isUserLogged() ? <Redirect to="/admin/login" /> :
            <BlogContainer>

            </BlogContainer>
        );
    }
}

export default Index;