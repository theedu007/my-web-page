import { blogEndpoint } from '../../package.json';
import jwt_decode from 'jwt-decode';

const authEndpoint = blogEndpoint + 'auth'

export const login = (username, password) => (
    fetch( `${authEndpoint}/login`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ username: username, password: password }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(respose => {
        if(respose.ok) {
            return respose.json();
        }
        return Promise.reject(respose.json())
    })
    .then(dataRespose => localStorage.setItem('blogUser', dataRespose.data))
)

export const logout = () => {
    localStorage.removeItem('blogUser');
}

const getCurrentUserToken = () => {
    return localStorage.getItem('blogUser');
}

export const isUserLogged = () => {
    const token = getCurrentUserToken();
    if(!token) {
        return false;
    }
    
    const { exp } = jwt_decode(token);
    const expTime = new Date(exp * 1000);
    const today = new Date();

    if(expTime.getTime() < today.getTime()){
        logout();
        return false;
    }
    return true;
}

export const getAuthHeaders = () => {
    const token = getCurrentUserToken();
    if(token) {
        return { Authorization: `Bearer ${token}` }
    }
    return undefined;
}