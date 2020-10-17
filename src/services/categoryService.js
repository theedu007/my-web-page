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

export const createCategory = (jsonCategory) => (
    fetch(endpoint + '/create', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(jsonCategory),
        headers: {
            ...getAuthHeaders(),
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
)