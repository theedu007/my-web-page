import { blogEndpoint } from '../../package.json';
import { getAuthHeaders } from './authService'

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

export const findPost = (id) => (
    fetch(endpoint + `/id/${id}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            ...getAuthHeaders(),
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        return response.json();
    })
)

export const createPost = (jsonPost) => (
    fetch(endpoint + '/create', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(jsonPost),
        headers: { 
            ...getAuthHeaders(),
            'Content-Type': 'application/json'
        }
    })
    .then(respose => {
        if(respose.ok) {
            return respose.json();
        }
        return Promise.reject(respose);
    })
);

export const updatePost = (jsonPost) => (
    fetch(endpoint + '/update', {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(jsonPost),
        headers: {
            ...getAuthHeaders(),
            'Content-Type': 'application/json'
        }
    })
    .then(respose => respose.json())
)

export const deletePost = (jsonPost) => (
    fetch(endpoint + '/delete', {
        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify(jsonPost),
        headers: {
            ...getAuthHeaders(),
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
)