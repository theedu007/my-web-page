import React from 'react';
import MarkdownView from 'react-showdown';
import { Link } from 'react-router-dom';

import './blog-miniature.styles.css';

const PostMiniature = (props) => {

    const { title, shortDescription, postedOn, urlSlug } = props;
    return (
        <div className="post-miniature">
            <div className="post-miniature-title">
                {
                    <Link to={`/blog/${urlSlug}`} >
                        <MarkdownView markdown={title} />
                    </Link>
                }
            </div>
            <div className= "post-miniature-description">
                { <MarkdownView markdown={shortDescription} />}
            </div>
            <div className="post-data">
                <p>Publicado: {postedOn}</p>
            </div>
        </div>
    );
};

export default PostMiniature