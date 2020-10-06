import React from 'react';
import showdownHighlight from 'showdown-highlight';
import MarkdownView from 'react-showdown';
import 'highlight.js/styles/atom-one-dark.css';

const MarkDownWrapper = ({ markdown }) => (
    <MarkdownView
        markdown={markdown}
        options={{
            extensions:[showdownHighlight],
            parseImgDimensions: true
        }}
    />
);

export default MarkDownWrapper;