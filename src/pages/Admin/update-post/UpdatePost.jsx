import React, { Component } from 'react';
import BlogContainer from '../../../components/blog-container/blog-container.component';
import { isUserLogged } from '../../../services/authService';
import PostEditor from '../../../components/post-editor/post-editor.component';
import { Redirect } from 'react-router-dom';
import { findPost, updatePost  } from '../../../services/postService';
import { fetchAllCategories } from '../../../services/categoryService';
import { fetchAllTags } from '../../../services/tagsService';
import Spinner from '../../../components/spinner/spiner.component';

class UpdatePost extends Component {
    constructor(props){
        super();
        this.state = {
            post: {
                id: props.postId,
                title: "",
                shortDescription: "",
                postContent: "",
                urlSlug: "",
                published: false,
                category: {},
                tags: []
            },
            tags: [],
            categories: [],
            loading: true
        };

        this.handleTitle = this.handleTitle.bind(this);
        this.handleShortDescription = this.handleShortDescription.bind(this);
        this.handleUrlSlug = this.handleUrlSlug.bind(this);
        this.handlePostContent = this.handlePostContent.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleCategories = this.handleCategories.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.handleSpanClick = this.handleSpanClick.bind(this);
        this.updateHandle = this.updateHandle.bind(this);
    }

    handleTitle(event) {
        const updatedPost = { ...this.state.post };
        updatedPost.title = event.target.value;
        this.setState({ post: updatedPost });
    }

    handleShortDescription(event) {
        const updatedPost = { ...this.state.post };
        updatedPost.shortDescription = event.target.value;
        this.setState({ post: updatedPost });
    }

    handleUrlSlug(event) {
        const updatedPost = { ...this.state.post };
        updatedPost.urlSlug = event.target.value;
        this.setState({ post: updatedPost });
    }

    handlePostContent(event) {
        const updatedPost = { ...this.state.post };
        updatedPost.postContent = event.target.value;
        this.setState({ post: updatedPost });
    }

    handleCheckbox(event) {
        const updatedPost = { ...this.state.post };
        updatedPost.published = event.target.checked;
        this.setState({ post: updatedPost });
    }

    handleCategories(event) {
        const cateogory = this.state.categories.find(cat => parseInt(event.target.value) === cat.id);
        if(cateogory) {
            const updatedPost = { ...this.state.post };
            updatedPost.category = cateogory;
            this.setState({ post: updatedPost });
        }
    }

    handleTags(event) {
        const newTag = this.state.tags.find(tag => parseInt(event.target.value) === tag.id);
        if(newTag) {
            const updatedPost = { ...this.state.post };
            let { tags } = updatedPost;
            tags = [...tags, newTag];
            updatedPost.tags = tags;
            this.setState({ post: updatedPost });
        }
    }

    handleSpanClick(event, tagId) {
        event.preventDefault();
        const { post } = this.state
        const { tags } = post;
        const tagIndex = tags.findIndex(tag => tag.id === tagId);
        if(tagIndex > -1) {
            tags.splice(tagIndex, 1);
            post.tags = tags;
            this.setState({ post: post })
        }
    }

    updateHandle(event) {
        event.preventDefault();
        const { post } = this.state;
        updatePost(post)
        .then(data => {
            if(data.success) {
                this.props.history.push("/admin");
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        Promise.all([
            fetchAllTags(),
            fetchAllCategories(),
            findPost(id)
        ])
        .then(([tagResponse, categoriesResponse, postResponse]) => {
            this.setState({
                tags: tagResponse.data, 
                categories: categoriesResponse.data,
                post: postResponse.data,
                loading: false
            });
        })

    }

    render() {
        const { loading } = this.state;

        return(
            !isUserLogged() ? <Redirect to="/admin/login" /> :
            <BlogContainer className="container-medium">
                <Spinner isLoading={loading} />
                <PostEditor
                 state = { this.state }
                 handleTitle = { this.handleTitle }
                 handleShortDescription = { this.handleShortDescription }
                 handleUrlSlug = { this.handleUrlSlug }
                 handlePostContent = { this.handlePostContent }
                 handleCategories = { this.handleCategories }
                 handleTags = { this.handleTags }
                 handleCheckbox = { this.handleCheckbox }
                 handleSpanClick = { this.handleSpanClick }
                 savePost = { this.updateHandle }
                />
            </BlogContainer>
        );
    }
}

export default UpdatePost;