import React from 'react';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BlogContainer from '../../../components/blog-container/blog-container.component';
import { isUserLogged } from '../../../services/authService';
import { createPost } from '../../../services/postService';
import { fetchAllCategories } from '../../../services/categoryService';
import { fetchAllTags } from '../../../services/tagsService';

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
        debugger;
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
        const { categories, tags } = this.state;
        
        return(
            !isUserLogged() ? <Redirect to="/admin/login" /> :
            <BlogContainer className="container-medium">
                <form onSubmit={ this.savePost }>
                    <div className="form-group mb">
                        <label htmlFor="title">Titulo:</label>
                        <input type="text" id="title" value={this.state.title} onChange={ (event) => { this.handleTitle(event) }} />
                    </div>
                    <div className="form-group mb">
                        <label htmlFor="subtitle">Descripcion Corta:</label>
                        <input type="text" id="subtitle" value={this.state.shortDescription} onChange={ event => { this.handleShortDescription(event) }}/>
                    </div>
                    <div className="form-group mb">
                        <label htmlFor="urlSlug">Url:</label>
                        <input type="text" id="urlSlug" value={this.state.urlSlug} onChange={ event => { this.handleUrlSlug(event) }} />
                    </div>
                    <div className="form-group mb">
                        <label htmlFor="content">Post Content:</label>
                        <textarea id="content" rows="40" value={this.state.postContent} onChange={ event => { this.handlePostContent(event) }}></textarea>
                    </div>
                    <div className="form-group mb">
                        <label htmlFor="category">Categorias:</label>
                        <select id="category" onChange={ event => { this.handleCategories(event) }}>
                            <option>Seleccione una opcion</option>
                            { categories ? categories.map((item, index) => <option value={item.id} key={index} >{item.name}</option> ) : null}
                        </select>
                    </div>
                    <div className="form-group mb">
                        <label htmlFor="tags">Tags:</label>
                        <select id="tags" onChange={ event => { this.handleTags(event) } }>
                            <option>Seleccione una opcion</option>
                            { tags ? tags.map((item, index) => <option value={item.id} key={index} >{item.name}</option> ) : null}
                        </select>
                    </div>
                    <div className="checkbox-group mb">
                        <label htmlFor="posted">Publicado:</label>
                        <input type="checkbox" id="posted" value={this.state.published} onChange={ event => { this.handleCheckbox(event) }}/>
                    </div>
                    <div className="form-group mb">
                        <input type="submit" className="btn" value="Guardar"/>
                    </div>
                </form>
            </BlogContainer>
        );
    }
}

export default CreatePostForm;