import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './pages/homepage';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Homepage} />
      </div>
    </Router>
  );
}

export default App;
