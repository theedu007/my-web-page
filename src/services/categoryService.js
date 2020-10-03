import { blogEndpoint } from '../../package.json';
import { getAuthHeaders } from './authService'

const endpoint = blogEndpoint + 'categories';

export const fetchAllCategories = () => (
    fetch(endpoint, {
        method: 'GET',
        mode: 'cors',
        headers: getAuthHeaders()
    })
    .then(response => response.json())
)