import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import BlogHome from './pages/Blog/Home/BlogHome';

import BlogLayout from './pages/Blog/BlogLayout';
import Home from './pages/LandingPage/Home/Home';
import LandingLayout from './pages/LandingPage/LandingLayout';
import Portfolio from './pages/LandingPage/Portfolio/Portfolio';
import AboutMe from './pages/LandingPage/AboutMe/about-me'
import Post from './components/post/post.component';

function App() {
  return (
    <Switch>
      <Route path="/blog/:path?" exact>
        <BlogLayout>
          <Route path="/blog" exact component={ BlogHome } />
          <Route path="/blog/:title"  component={ Post } />
          <Route path="*" component={() => <div>aqui no hay nada en blog</div>} />
        </BlogLayout>
      </Route>
      <Route>
        <LandingLayout>
          <Route exact path="/" component={ Home } />
          <Route path="/portfolio" component={ Portfolio } />
          <Route path ="/about-me" component={ AboutMe } />
          <Route path="*" component={() => <div>aqui no hay nada en home</div>} />
        </LandingLayout>
      </Route>
    </Switch>
  );
}

export default App;
