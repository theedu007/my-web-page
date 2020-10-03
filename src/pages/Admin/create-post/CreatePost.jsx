import React from 'react';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BlogContainer from '../../../components/blog-container/blog-container.component';
import { isUserLogged } from '../../../services/authService';
import { createPost } from '../../../services/postService';
import { fetchAllCategories } from '../../../services/categoryService';
import { fetchAllTags } from '../../../services/tagsService';
import PostEditor from '../../../components/post-editor/post-editor.component';

class CreatePostForm extends Component {
    constructor(props){
        super();
        this.state = {
            post: {
                title: "",
                shortDescription: "",
                postContent: "",
                urlSlug: "",
                published: false,
                category: {},
                tags: []
            },
            tags: [],
            categories: []
        };
        
        this.handleTitle = this.handleTitle.bind(this);
        this.handleShortDescription = this.handleShortDescription.bind(this);
        this.handleUrlSlug = this.handleUrlSlug.bind(this);
        this.handlePostContent = this.handlePostContent.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.savePost = this.savePost.bind(this);
        this.handleCategories = this.handleCategories.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.savePost = this.savePost.bind(this);
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

    savePost(event) {
        event.preventDefault();
        createPost(this.state.post)
        .then(response => {
            if(response.success)
            {
                this.props.history.push("/admin");
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        if(isUserLogged()) {
            Promise.all([
                fetchAllTags(),
                fetchAllCategories()
            ])
            .then(([tagResponse, categoriesResponse]) => 
                this.setState({ tags: tagResponse.data, categories: categoriesResponse.data}
            ))
        }
    }

    render() {        
        return(
            !isUserLogged() ? <Redirect to="/admin/login" /> :
            <BlogContainer className="container-medium">
                <PostEditor
                 state = { this.state }
                 handleTitle = { this.handleTitle }
                 handleShortDescription = { this.handleShortDescription }
                 handleUrlSlug = { this.handleUrlSlug }
                 handlePostContent = { this.handlePostContent }
                 handleCategories = { this.handleCategories }
                 handleTags = { this.handleTags }
                 handleCheckbox = { this.handleCheckbox }
                 savePost = { this.savePost }
                />
            </BlogContainer>
        );
    }
}

export default CreatePostForm;