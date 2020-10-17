import React, { Component } from 'react';
import BlogContainer from '../../../components/blog-container/blog-container.component';
import TagEditor from '../../../components/tag-editor/tag-editor.component';
import { Redirect } from 'react-router-dom';
import { createTag } from '../../../services/tagsService';

class CreateTag extends Component {
    constructor(props) {
        super()
        this.state =  {
            tag : {
                name: "",
                description: "",
                urlSlug: ""
            }
        };

        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleUrlSlug = this.handleUrlSlug.bind(this);
        this.saveTag = this.saveTag.bind(this);
    }

    handleName(event) {
        const { tag } = this.state;
        tag.name = event.target.value;
        this.setState({ tag: tag });
    }

    handleDescription(event) {
        const { tag } = this.state;
        tag.description = event.target.value;
        this.setState({ tag: tag });
    }

    handleUrlSlug(event) {
        const { tag } = this.state;
        tag.urlSlug = event.target.value;
        this.setState({ tag: tag});
    }

    saveTag(event) {
        event.preventDefault();
        const { tag } = this.state;
        createTag(tag)
        .then(respose => {
            if(respose.success) {
                this.props.history.push("/admin");
            }
        })
    }

    render() {
        const { isUserLogged } = this.props;
        const { tag } = this.state;

        return(
            !isUserLogged ? <Redirect to="/admin/login" /> :
            <BlogContainer className="container-medium">
                <TagEditor
                    handleName={this.handleName}
                    handleDescription={this.handleDescription}
                    handleUrlSlug={this.handleUrlSlug}
                    save={this.saveTag}
                    data={tag}/>
            </BlogContainer>
        );
    }
}

export default CreateTag;