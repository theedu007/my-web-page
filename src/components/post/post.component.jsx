import React from 'react';
import { Component } from 'react';
import { fetchPost } from '../../utils/postRequests';
import BlogContainer from '../blog-container/blog-container.component';

class Post extends Component {
    constructor(props) {
        super();
        this.state = {
            post: {},
            urlSlug: ''
        } 
    }

    componentDidMount() {
        const { title } = this.props.match.params;
        fetchPost(title)
        .then(data => this.setState({ post: data.data }))
    }

    render() {
        return (
            <BlogContainer>
                ESTE ES TU PUTO POST ALV {JSON.stringify(this.state.post)}
            </BlogContainer>
        )
    }
}

export default Post;