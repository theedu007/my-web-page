import React from 'react';
import { Component } from 'react';
import { blogEndopoint } from '../../../../package.json';
import PostMiniature from '../../../components/blog-miniature/blog-miniature.component';

class BlogHome extends Component {
    constructor(){
        super();
        this.state = {
            posts: {}
        }
        this.fetchPosts.bind(this);
    }

    fetchPosts() {
        fetch(blogEndopoint + 'post', {
            method: 'GET',
            mode: 'cors'
        })
        .then(data => {
            return data.json()
        })
        .then(json => this.setState({ posts: json }))
    }

    componentDidMount() {
        this.fetchPosts();
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                {posts.data && posts.data.length > 0 ? posts.data.map((post, index) => 
                <PostMiniature 
                    key={index} 
                    title={ post.title }
                    shortDescription={ post.shortDescription }
                    postedOn={ post.postedOn }
                    urlSlug={ post.urlSlug } />
                ) : null}
            </div>
        )
    }
}

export default BlogHome;