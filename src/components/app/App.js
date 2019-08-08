import React from 'react';
import './App.css';
import {Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './pages/homepage';
import About from './pages/about';
import Projects from './pages/projects';

function App() {
  return (
    <div className='pageWrapper'>
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route path="/about/" component={About} />
        <Route path="/projects/" component={Projects} />
      </Router>
    </div>
  );
}

export default App;
