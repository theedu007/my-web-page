import { blogEndpoint } from '../../package.json';

const endpoint = blogEndpoint + 'post';

export const fetchAllPosts = () => (
    fetch(endpoint, {
        method: 'GET',
        mode: 'cors'
    })
    .then(response => response.json())
);

export const fetchPost = (urlSlug) => (
    fetch(endpoint + `/${urlSlug}`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(response => response.json())
)