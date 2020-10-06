import React from 'react';
import { Component } from 'react';
import { fetchPost } from '../../services/postService';
import { toLocalDate } from '../../utils/dateParser';
import MarkDownWrapper from '../../utils/MakdownWrapper';
import BlogContainer from '../blog-container/blog-container.component';
import './post-blog.styles.css';

class Post extends Component {
    constructor(props) {
        super();
        debugger;
        this.state = {
            post: {},
            urlSlug: '',
        } 
    }

    componentDidMount() {
        const { title } = this.props.match.params;
        fetchPost(title)
        .then(data => this.setState({ post: data.data }))
    }

    render() {
        const { title, shortDescription, postedOn, postContent } = this.state.post;

        return (
            <BlogContainer>
                <div className="post-container">
                    <div className="post-title">
                        <MarkDownWrapper markdown={ title } />
                    </div>
                    <div className="post-subtitle">
                        <MarkDownWrapper markdown={ shortDescription } />
                    </div>
                    <div className="post-info">
                        <MarkDownWrapper markdown={ 'Publicado el: ' + toLocalDate(postedOn) } />
                    </div>
                    <div className="post-content">
                        <MarkDownWrapper markdown={ postContent } />
                    </div>
                </div>
            </BlogContainer>
        )
    }
}

export default Post;