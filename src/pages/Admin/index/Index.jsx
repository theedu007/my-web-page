import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import BlogContainer from '../../../components/blog-container/blog-container.component';
import Spinner from '../../../components/spinner/spiner.component';
import Table from '../../../components/table/table.component.';

import { deletePost, fetchAllPosts } from '../../../services/postService';
import { toLocalDate } from '../../../utils/dateParser';

class Index extends Component {
    _isMounted = false;
    constructor(props) {
        super();
        this.state = {
            posts: {},
            loading: true
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        fetchAllPosts()
        .then(json => { 
            if(this._isMounted) {
                this.setState({ posts: json, loading: false })
            }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
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
        const { posts, loading } = this.state;
        const { isUserLogged } = this.props;
        return(
            !isUserLogged ? <Redirect to="/admin/login" /> :
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
                                        <Link to={`admin/post/update/${id}`} className="btn">Editar</Link>
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