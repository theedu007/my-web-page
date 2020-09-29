import React from 'react';
import { Component } from 'react';
import BlogContainer from '../../../components/blog-container/blog-container.component';
import PostMiniature from '../../../components/blog-miniature/blog-miniature.component';
import { fetchAllPosts } from '../../../utils/postRequests';

class BlogHome extends Component {
    constructor(){
        super();
        this.state = {
            posts: {}
        }
    }

    fetchPosts() {
        fetchAllPosts()
        .then(json => { 
            this.setState({ posts: json })
        })
    }

    componentDidMount() {
        this.fetchPosts();
    }

    render() {
        const { posts } = this.state;
        return (
            <BlogContainer>
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