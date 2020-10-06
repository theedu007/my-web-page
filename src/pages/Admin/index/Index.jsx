import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import BlogContainer from '../../../components/blog-container/blog-container.component';
import Spinner from '../../../components/spinner/spiner.component';
import Table from '../../../components/table/table.component.';

import { isUserLogged } from '../../../services/authService';
import { deletePost, fetchAllPosts } from '../../../services/postService';
import { toLocalDate } from '../../../utils/dateParser';

class Index extends Component{
    constructor(props) {
        super();
        this.state = {
            posts: {},
            loading: true
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    fetchPosts() {  
        fetchAllPosts()
        .then(json => { 
            this.setState({ posts: json, loading: false })
        })
    }

    componentDidMount() {
        this.fetchPosts();
    }

    handleDelete(event, postId) {
        event.preventDefault();
        debugger;
        const post = { id: postId };
        deletePost(post)
        .then(response => {
            if(response.success) {
                window.location.reload();
            }
        })
    }

    render() {
        const {posts, loading} = this.state;

        return(
            !isUserLogged() ? <Redirect to="/admin/login" /> :
            <BlogContainer>
                <Spinner isLoading={loading}/>
                { posts.data && posts.data.length > 0 ? 
                    <Table 
                        headers={['Post', 'Fecha de publicacion', 'Opciones']}
                        data={posts.data}
                        tableBodyFuction={(post, index) => {
                            const {id ,title, postedOn} = post;
                            return (
                                <tr key={index} >
                                    <td>{title.replace(/##/g,"").trim()}</td>
                                    <td>{toLocalDate(postedOn)}</td>
                                    <td>
                                        <Link to={`admin/update/${id}`} className="btn">Editar</Link>
                                        <button className="btn" onClick={(event) => this.handleDelete(event, id)}>Eliminar</button>
                                    </td>
                                </tr>
                            );
                        }} />
                : null }
            </BlogContainer>
        );
    }
}

export default Index;