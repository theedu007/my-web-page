import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BlogContainer from '../../../components/blog-container/blog-container.component';
import { isUserLogged, login } from '../../../services/authService';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            username: "",
            password: "",
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleUsername(event) {
        this.setState({ username: event.target.value })
    }

    handlePassword(event) {
        this.setState({ password: event.target.value })
    }

    handleLogin(event) {
        event.preventDefault();
        const { username, password } = this.state;
        login(username, password)
        .then(() => { 
            this.props.history.push("/admin");
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <BlogContainer className="container-medium">
                <form onSubmit={ this.handleLogin }>
                    <div className="form-group mb">
                        <label htmlFor="username">Usuario:</label>
                        <input type="text" id="username" value={ this.state.username } onChange={ this.handleUsername }/>
                    </div>
                    <div className="form-group mb">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" value={ this.state.password } onChange={ this.handlePassword }/>
                    </div>
                    <input type="submit" value="Entrar"/>
                </form>
            </BlogContainer>
        )
    }
}

export default Login;