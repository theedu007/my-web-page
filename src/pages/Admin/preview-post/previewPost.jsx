import React from 'react';
import { withRouter } from 'react-router-dom';
import BlogContainer from '../../../components/blog-container/blog-container.component';
import MarkDownWrapper from '../../../utils/MakdownWrapper';
import { toLocalDate } from '../../../utils/dateParser';

const PreviewPost = (props) => {
    
    const { post } = props;
    const { title, shortDescription, postedOn, postContent } = post;
    debugger;

    return (
        <BlogContainer>
            <div className="post-container">
                <div className="post-title">
                    <MarkDownWrapper markdown={ title } />
                </div>
                <div className="post-subtitle">
                    <MarkDownWrapper markdown={ shortDescription } />
                </div>
                <div className="post-info">
                    <MarkDownWrapper markdown={ 'Publicado el: ' + toLocalDate(postedOn) } />
                </div>
                <div className="post-content">
                    <MarkDownWrapper markdown={ postContent } />
                </div>
                <div>
                    <button className="btn" onClick={() => props.history.goBack()}>Regresar al editor</button>
                </div>
            </div>
        </BlogContainer>
    )
}

export default withRouter(PreviewPost);