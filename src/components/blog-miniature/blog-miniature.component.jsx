import React from 'react';

const PostMiniature = (props) => {

    const { title, shortDescription, postedOn, urlSlug } = props;

    return (
        <div>
            <div className="post-miniature-title">
                {title}
            </div>
            <div>
                {shortDescription}
            </div>
        </div>
    );
};

export default PostMiniature