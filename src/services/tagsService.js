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

export const findTag = (id) => (
    fetch(endpoint + `/id/${id}`,{
        method: 'GET',
        mode: 'cors',
        headers: {
            ...getAuthHeaders(),
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
)

export const createTag = tagJson => (
    fetch(endpoint + '/create', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(tagJson),
        headers: {
            ...getAuthHeaders(),
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
);

export const updateTag = tagJson => (
    fetch(endpoint + '/update', {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(tagJson),
        headers: {
            ...getAuthHeaders(),
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
);