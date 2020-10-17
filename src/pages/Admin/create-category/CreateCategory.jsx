import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BlogContainer from '../../../components/blog-container/blog-container.component';
import TagEditor from '../../../components/tag-editor/tag-editor.component';
import { createCategory } from '../../../services/categoryService';

class CreateCategory extends Component {
    constructor(props) {
        super();
        this.state = {
            category : {
                name: "",
                description: "",
                urlSlug: ""
            }
        }

        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleUrlSlug = this.handleUrlSlug.bind(this);
        this.saveCategory = this.saveCategory.bind(this);
    }

    handleName(event) {
        const { category } = this.state;
        category.name = event.target.value;
        this.setState({ category: category });
    }

    handleDescription(event) {
        const { category } = this.state;
        category.description = event.target.value;
        this.setState({ category: category });
    }

    handleUrlSlug(event) {
        const { category } = this.state;
        category.urlSlug = event.target.value;
        this.setState({ category: category});
    }

    saveCategory(event) {
        event.preventDefault();
        const { category } = this.state;
        createCategory(category)
        .then(response => {
            debugger;
            if(response.success) {
                this.props.history.push("/admin");
            }
        })
    }

    render() {
        const { isUserLogged } = this.props;
        const { category } = this.state;

        return(
            !isUserLogged ? <Redirect to="/admin/login" /> :
            <BlogContainer className="container-medium">
                <TagEditor
                    handleName={this.handleName}
                    handleDescription={this.handleDescription}
                    handleUrlSlug={this.handleUrlSlug}
                    save={this.saveCategory}
                    data={category}
                />
            </BlogContainer>
        );
    }
}

export default CreateCategory;