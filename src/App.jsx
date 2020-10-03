import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import BlogHome from './pages/Blog/Home/BlogHome';

import BlogLayout from './pages/Blog/BlogLayout';
import Home from './pages/LandingPage/Home/Home';
import LandingLayout from './pages/LandingPage/LandingLayout';
import Portfolio from './pages/LandingPage/Portfolio/Portfolio';
import AboutMe from './pages/LandingPage/AboutMe/about-me'
import Post from './components/blog-post/blog-post.component';
import AdminLayout from './pages/Admin/AdminLayout';
import CreatePostForm from './pages/Admin/create-post/CreatePost';
import Login from './pages/Admin/login/Login';
import Index from './pages/Admin/index/Index';

function App() {
  return (
    <Switch>
      <Route path="/admin/:path?" exact>
        <AdminLayout>
          <Route path="/admin/create-post" exact component={ CreatePostForm } />
          <Route path="/admin/login" exact component={ Login } />
          <Route path="/admin" exact component={ Index } />
        </AdminLayout>
      </Route>
      <Route path="/blog/:path?" exact>
        <BlogLayout>
          <Route path="/blog/:title"  component={ Post } />
          <Route path="/blog/" exact component={ BlogHome } />
        </BlogLayout>
      </Route>
      <Route route="/">
        <LandingLayout>
          <Route path="/portfolio" component={ Portfolio } />
          <Route path ="/about-me" component={ AboutMe } />
          <Route path="/" exact component={ Home } />
        </LandingLayout>
      </Route>
    </Switch>
  );
}

export default App;
