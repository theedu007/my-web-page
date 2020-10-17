import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import BlogContainer from '../../../components/blog-container/blog-container.component';
import TagEditor from '../../../components/tag-editor/tag-editor.component';
import { findTag, updateTag } from '../../../services/tagsService';

class UpdateTag extends Component {
    constructor(props) {
        super();
        this.state =  {
            tag : {
                id: 0,
                name: "",
                description: "",
                urlSlug: ""
            }
        };
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleUrlSlug = this.handleUrlSlug.bind(this);
        this.updateTag = this.updateTag.bind(this);
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

    componentDidMount() {
        const { id } = this.props.match.params;
        findTag(id)
        .then(response => {
            if(response.success) {
                const { data } = response;
                const tag = {
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    urlSlug: data.urlSlug
                };
                debugger;
                this.setState({ tag: tag });
            }
        });
    }

    updateTag(event) {
        event.preventDefault();
        const { tag } = this.state;
        updateTag(tag)
        .then(response => {
            if(response.success) {
                this.props.history.push("/admin");
            }
        })
    }

    render() {
        const { isUserLogged } = this.props;

        return(
            !isUserLogged ? <Redirect to="/admin/login" /> :
            <BlogContainer>
                <TagEditor 
                    handleName={this.handleName}
                    handleDescription={this.handleDescription}
                    handleUrlSlug={this.handleUrlSlug}
                    saveTag={this.updateTag}
                    state={this.state} />
            </BlogContainer>
        );
    }
}

export default UpdateTag;