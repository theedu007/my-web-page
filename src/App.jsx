import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import BlogHome from './pages/Blog/Home/BlogHome';

import BlogLayout from './pages/Blog/BlogLayout';
import Home from './pages/LandingPage/Home/Home';
import LandingLayout from './pages/LandingPage/LandingLayout';
import Portfolio from './pages/LandingPage/Portfolio/Portfolio';
import AboutMe from './pages/LandingPage/AboutMe/about-me'

function App() {
  return (
    <Switch>
      <Route path="/blog/:path?" exact>
        <BlogLayout>
          <Route path="/blog" exact component={ BlogHome } />
        </BlogLayout>
      </Route>
      <Route>
        <LandingLayout>
          <Route exact path="/" component={ Home } />
          <Route path="/portfolio" component={ Portfolio } />
          <Route path ="/about-me" component={ AboutMe } />
        </LandingLayout>
      </Route>
    </Switch>
  );
}

export default App;
