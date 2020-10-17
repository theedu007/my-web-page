import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BlogContainer from '../../../components/blog-container/blog-container.component';
import Spinner from '../../../components/spinner/spiner.component';
import Table from '../../../components/table/table.component.';
import { fetchAllTags } from '../../../services/tagsService';

class Tags extends Component {
    constructor(props) {
        super();
        this.state = {
            tags: [{}],
            loading: true
        }
    }

    componentDidMount() {
        fetchAllTags()
        .then(response => {
            if(response.success) {
                this.setState({ tags: response.data, loading: false })
            }
        })
    }

    render() {
        const { tags, loading } = this.state;
        const { isUserLogged } = this.props;
        debugger;
        return(
            !isUserLogged ? <Redirect to="/admin/login" /> :
            <BlogContainer>
                <Spinner isLoading={loading}/>
                <Table 
                    headers={['Tags', 'Descripcion', 'UrlSlug']}
                    data={tags}
                    tableBodyFuction={(tag, index) => {
                        const{ name, description, urlSlug } = tag;
                        return (
                            <tr key={index}>
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>{urlSlug}</td>
                            </tr>
                        );
                    }}
                />
            </BlogContainer>
        );
    }
}

export default Tags;