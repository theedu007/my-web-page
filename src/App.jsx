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
import UpdatePost from './pages/Admin/update-post/UpdatePost';
import PreviewPost from './pages/Admin/preview-post/previewPost';
import RouteWrapper from './utils/RouteWrapper';

function App() {
  return (
    <Switch>
      <Route path="/admin/:entity?/:action?/:id?" exact>
        <RouteWrapper path="/admin/create-post" exact Layout={ AdminLayout } Component={ CreatePostForm } />
        <RouteWrapper path="/admin/login" exact Layout={ AdminLayout } Component={ Login } />
        <RouteWrapper path="/admin/post/update/:id" exact Layout={ AdminLayout } Component={ UpdatePost } />
        <RouteWrapper path="/admin/post/preview" exact Layout={ AdminLayout } Component={ props => <PreviewPost post={props.location.state} /> } />
        <RouteWrapper path="/admin/create-post" exact Layout={ AdminLayout } Component={ CreatePostForm }/>
        <RouteWrapper path="/admin" exact Layout={ AdminLayout } Component={ Index} />
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
