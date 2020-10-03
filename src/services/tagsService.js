import { blogEndpoint } from '../../package.json';
import { getAuthHeaders } from './authService'

const endpoint = blogEndpoint + 'tag';

export const fetchAllTags = () => (
    fetch(endpoint, {
        method: 'GET',
        mode: 'cors',
        headers: getAuthHeaders()
    })
    .then(response => response.json())
)