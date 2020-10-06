import React from 'react';
import { Component } from 'react';

import BlogContainer from '../../../components/blog-container/blog-container.component';
import PostMiniature from '../../../components/blog-miniature/blog-miniature.component';

import Spinner from '../../../components/spinner/spiner.component';

import { fetchAllPosts } from '../../../services/postService';

class BlogHome extends Component {
    constructor(){
        super();
        this.state = {
            posts: {},
            loading: true
        }
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

    render() {
        const { posts, loading } = this.state;
        return (
            <BlogContainer>
                <Spinner isLoading={loading} />
                { posts.data && posts.data.length > 0 ? posts.data.map((post, index) => {
                    return (
                        <React.Fragment key={Math.random()}>
                            <PostMiniature 
                                key={index} 
                                title={ post.title }
                                shortDescription={ post.shortDescription }
                                postedOn={ post.postedOn }
                                urlSlug={ post.urlSlug } >
                            </PostMiniature>
                            {index !== (posts.data.length - 1) && <hr style={{width: '99%'}} key={Math.random()}></hr>}
                        </React.Fragment>
                    );
                }) : null }
            </BlogContainer>
        )
    }
}

export default BlogHome;